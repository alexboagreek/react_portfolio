import React from 'react';
import './myLatestProjects.scss';
import {Project} from "./project/Project";
import {Title} from "../../commons/title/Title";
import {Button} from "../../commons/button/Button";

export const MyLatestProjects = () => {
  const initialProjects = [
    {
      title: "Your network",
      urlImage: "https://media.istockphoto.com/photos/social-media-concept-picture-id1205703732?k=20&m=1205703732&s=612x612&w=0&h=RjnvKZW_InJ73SoPzQVA8qj5bcg6_0yBgPx_JUtrn2k=",
      technologies: "React/Redux/TypeScript/Ant Design",
      urlGitPage: "#",
      urlGitRepo: "https://github.com/alexeynikinitin/social-network",
    },
    {
      title: "Todo List",
      urlImage: "https://media.gettyimages.com/photos/to-do-list-on-notebook-page-with-laptop-and-coffee-mug-picture-id1077341604?s=612x612",
      technologies: "React/Redux-toolkit/TypeScript/Hooks/MUI",
      urlGitPage: "https://alexeynikinitin.github.io/todolist",
      urlGitRepo: "https://github.com/alexeynikinitin/todolist",
    },
    {
      title: "Portfolio",
      urlImage: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      technologies: "React/JavaScript/SCSS",
      urlGitPage: "https://alexeynikinitin.github.io/portfolio/",
      urlGitRepo: "https://github.com/alexeynikinitin/portfolio",
    },
    {
      title: "Memorization Cards",
      urlImage: "https://www.imperfecthomemaker.com/wp-content/uploads/2016/01/abc-verses.jpg",
      technologies: "React/TypeScript/Redux/Axios",
      urlGitPage: "https://FoxSide.github.io/friday-project",
      urlGitRepo: "https://github.com/FoxSide/friday-project",
    },
    {
      title: "Counter",
      urlImage: "https://www.u-buy.com.ua/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFTWDNxajV0OUwuX0FDX1NMMTUwMF8uanBn.jpg",
      technologies: "React/TypeScript/Redux/Local Storage",
      urlGitPage: "#",
      urlGitRepo: "https://github.com/alexeynikinitin/exams",
    },
    {
      title: "Gallery site",
      urlImage: "https://www.photo.gallery/content/1.index/x3-photo-gallery-website.jpg",
      technologies: "React/TypeScript/Redux/Redux-Saga/Bootstrap",
      urlGitPage: " https://alexeynikinitin.github.io/mitrasoft__test/",
      urlGitRepo: "https://github.com/alexeynikinitin/mitrasoft__test",
    },
  ]

  return (
    <div id="projects" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Title title={"My Best Project"}
               subtitle={"Projects that I have done"}/>
          </div>
        </div>
        <div className="row">
          {
            initialProjects.map((p, i) => <Project title={p.title}
                                                   urlImage={p.urlImage}
                                                   technologies={p.technologies}
                                                   urlGitPage={p.urlGitPage}
                                                   urlGitRepo={p.urlGitRepo}
                                                   key={`${i}-${p.title}`}
            />)
          }
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Button btnName={"View more"} btnClass={"view-more-btn"} url={"https://github.com/alexeynikinitin"}/>
          </div>
        </div>
      </div>
    </div>
  );
};