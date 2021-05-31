import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddNewBlog.css";
import Blogs from "./Blogs";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function AddNewBlog() {
  let query = useQuery();
  const blog_url = `https://apidev.crystaivf.com/api/v1/blog/blogs/`;
  const slug = query.get("slug");

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [blogs, setBlogs] = useState();
  const [editor, seteditor] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);

  const postData = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("thumbnail", thumbnail);
    formData.append("content", convertedContent);
    formData.append("header_image", headerImage);
    console.log(formData.get("thumbnail"));
    axios
      .patch(
        "https://apidev.crystaivf.com/api/v1/blog/blog/" + slug + "/",
        formData,
        {
          headers: {
            "Authorization" : `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function(response) {
        console.log(response);
      });
    setTitle("");
    setSummary("");
    setThumbnail("");
    setHeaderImage("");
    setConvertedContent("");
    setEditorState("");
    


  };
  function uploadImageCallBack(file) {
    // return new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.open("POST", "https://api.imgur.com/3/image");
    //   xhr.setRequestHeader("Authorization", "Client-ID ##clientid###");
    //   const data = new FormData();
    //   data.append("image", file);
    //   xhr.send(data);
    //   xhr.addEventListener("load", () => {
    //     const response = JSON.parse(xhr.responseText);
    //     console.log(response);
    //     resolve(response);
    //   });
    //   xhr.addEventListener("error", () => {
    //     const error = JSON.parse(xhr.responseText);
    //     console.log(error);
    //     reject(error);
    //   });
    // });
  }
  const handleThumbnailChange = (e) => {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };
  const handleHeaderImageChange = (e) => {
    if (e.target.files[0]) {
      setHeaderImage(e.target.files[0]);
    }
  };
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  //   console.log(convertedContent);

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        setBlogs(response.data);
        {
          response?.data.results?.map((blog) => {
            if (blog?.slug == slug) {
              setTitle(blog.title);
              setSummary(blog.summary);
              setThumbnail(blog.thumbnail);
              setHeaderImage(blog.headerImage);
              const blocksFromHTML = convertFromHTML(blog.content);
              const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
              );
              setEditorState(EditorState.createWithContent(state));
              //   console.log(editorState);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
   

  }, []);

  return (
    <form>
      <input
        type="text"
        // placeholder="Title"
        defaultValue={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* 
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> */}

      <input
        type="text"
        // placeholder="Summary"
        defaultValue={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>

      <input
        type="file"
        defaultValue={thumbnail}
        placeholder="Thumbnail"
        onChange={handleThumbnailChange}
      />

      <input
        type="file"
        defaultValue={headerImage}
        placeholder="HeaderImage"
        onChange={handleHeaderImageChange}
      />

      <button type="submit" onClick={postData}>
        submit
      </button>
    </form>
  );
}

export default AddNewBlog;
