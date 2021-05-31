import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import Parser from "html-react-parser";
import DailyIframe from '@daily-co/daily-js';
import { useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SingleBlog() {
  let query = useQuery();
  const slug = query.get("slug");
  const [blogs, setblogs] = useState();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const blog_url =
    "https://apidev.crystaivf.com/api/v1/blog/blog/" + slug + "/";
  useEffect(() => {
    axios.get(blog_url).then((response) => {
      setblogs(response.data);
      //   console.log(blogs?.content);
      //   const blocksFromHTML = convertFromHTML(blogs?.content);
      //   const state = ContentState.createFromBlockArray(
      //     blocksFromHTML.contentBlocks,
      //     blocksFromHTML.entityMap
      //   );
      //   setEditorState(EditorState.createWithContent(state));
      //   console.log(editorState);
    });
  }, []);
  console.log(blogs?.content);
  //  const callFrame = DailyIframe.wrap(blogs?.content);
  // console.log(callFrame);
  return (
    <body>
      <div style={{ marginLeft: "150px" }}>
        <img src={blogs?.header_image} style={{ width: "80%" }} alt=" " />
      </div>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>{blogs?.title}</h3>
      </div>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
        <h5>{blogs?.summary}</h5>
        
      </div>
      <div dangerouslySetInnerHTML ={{__html:`${blogs?.content}`}}></div>
    </body>
  );
}

export default SingleBlog;
