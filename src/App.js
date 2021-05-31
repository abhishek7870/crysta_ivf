import React, { Fragment, Suspense, lazy } from "react";
import Loadable from "react-loadable";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BannerNew from "./Components/BannerNew/BannerNew";
import { CarouselProvider } from "./CarouselContext";
import { SecondCarouselProvider } from "./ReviewCarouselContext";
import City from "./Components/City/City";
import Services from "./Components/Services/Services";
import MedicalPanelNew from "./Components/MedicalPanelNew/MedicalPanelNew";
import Review from "./Components/Review/Review";
import Surrogacy from "./Components/Surrogacy/Surrogacy";
import IvfCost from "./Components/IvfCost/IvfCost";
import SurrogacyCost from "./Components/SurrogacyCost/SurrogacyCost";
import Blog from "../src/Components/Blog/Blog";
import AddNewBlog from "../src/Components/Blog/AddNewBlog";
import UpdateBlog from "./Components/Blog/UpdateBlog";
import SingleBlog from "../src/Components/Blog/SingleBlog";
import LogIn from "./Components/Blog/LogIn";

// import NetworkDoctors from '././Components/NetworkDoctors/NetworkDoctors';
// import Faq from './Components/Faq/Faq';
// import Hindi from './Components/HindiPage/HindiPage';
// import Gujarati from './Components/GujratiPages/GujratiPages';

const Footer = lazy(() => import("./Components/Footer/Footer"));
const NetworkDoctors = lazy(() =>
  import("./Components/NetworkDoctors/NetworkDoctors")
);
const Faq = lazy(() => import("./Components/Faq/Faq"));

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(
      entries,
      observer
    ) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});

function Loading({ error }) {
  if (error) {
    return "oh-noes!";
  } else {
    return "";
  }
}

const TermsAndConditionsComponent = Loadable({
  loader: () => import("./Components/TermsAndConditions/TermsAndConditions"),
  loading: Loading,
});

const PrivacyPolicyComponent = Loadable({
  loader: () => import("./Components/PrivacyPolicy/PrivacyPolicy"),
  loading: Loading,
});

const HindiComponent = Loadable({
  loader: () => import("./Components/HindiPage/HindiPage"),
  loading: Loading,
});
const MarathiComponent = Loadable({
  loader: () => import("./Components/MarathiPage/MarathiPage"),
  loading: Loading,
});

// const SurogacyComponent = Loadable({
// 	loader: () => import('./Components/Surrogacy/Surrogacy'),
// 	loading: 'Loading',
// });

// const CityComponent = Loadable({
// 	loader: () => import('./Components/City/City'),
// 	loading: 'Loading',
// });

const GujratiComponent = Loadable({
  loader: () => import("./Components/GujratiPages/GujratiPages"),
  loading: Loading,
});

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <BannerNew />
              <Services />
              <CarouselProvider>
                <MedicalPanelNew />
              </CarouselProvider>
              <Suspense fallback={<div />}>
                <NetworkDoctors />
              </Suspense>
              <Suspense fallback={<div />}>
                <Faq />
              </Suspense>

              <SecondCarouselProvider>
                <Review />
              </SecondCarouselProvider>

              <Suspense fallback={<div />}>
                <Footer />
              </Suspense>
            </Fragment>
          )}
        />
        <Route
          path="/termsandconditions"
          component={TermsAndConditionsComponent}
        />
        <Route path="/privacypolicy" component={PrivacyPolicyComponent} />
        <Route path="/ivf-hindi" component={HindiComponent} />
        <Route path="/ivf-gujarati" component={GujratiComponent} />
        <Route path="/ivf-marathi" component={MarathiComponent} />
        <Route path="/best-surrogacy-centre-:city" component={Surrogacy} />
        <Route path="/ivf-cost-:city" component={IvfCost} />
        <Route path="/surrogacy-cost-:city" component={SurrogacyCost} />
        <Route path="/best-ivf-centre-:city" component={City} />
        <Route path="/blog" component={Blog} />
        <Route path="/add-new-blog" component={AddNewBlog} />
        <Route path="/update-blog" component={UpdateBlog} />
        <Route path="/singleblog" component={SingleBlog} />
        <Route path="/login" component={LogIn} />

        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
