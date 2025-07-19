import React, { useState } from 'react';
import p1 from '../assets/images/p1.png';
import p12 from '../assets/images/p12.png';
import p13 from '../assets/images/p13.png';
import p14 from '../assets/images/p14.png';
import p15 from '../assets/images/p15.png';
import p16 from '../assets/images/p16.png';
import p17 from '../assets/images/p17.png';
import p18 from '../assets/images/p18.png';
import p19 from '../assets/images/p19.png';
import p110 from '../assets/images/110.png';
import p111 from '../assets/images/111.png';
import p112 from '../assets/images/112.png';
import p113 from '../assets/images/113.png';
import p114 from '../assets/images/114.png';
import p115 from '../assets/images/115.png';
import p116 from '../assets/images/116.png';
import p117 from '../assets/images/117.png';
import p118 from '../assets/images/118.png';
import p119 from '../assets/images/119.png';
import p120 from '../assets/images/120.png';
import p121 from '../assets/images/121.png';
import p122 from '../assets/images/122.png';
import p123 from '../assets/images/123.png';
import p124 from '../assets/images/124.png';
import p125 from '../assets/images/125.png';
import p126 from '../assets/images/126.png';
import p127 from '../assets/images/127.png';
import p128 from '../assets/images/128.png';
import p129 from '../assets/images/129.png';
import p130 from '../assets/images/130.png';
import p131 from '../assets/images/131.png';
import p132 from '../assets/images/132.png';
import p133 from '../assets/images/133.png';
import p134 from '../assets/images/134.png';
import p135 from '../assets/images/135.png';
import p136 from '../assets/images/136.png';
import p137 from '../assets/images/137.png';
import p138 from '../assets/images/138.png';
import p139 from '../assets/images/139.png';
import p140 from '../assets/images/140.png';
import p141 from '../assets/images/141.png';
import p142 from '../assets/images/142.png';
import p143 from '../assets/images/143.png';
import p144 from '../assets/images/144.png';
import p145 from '../assets/images/145.png';
import p146 from '../assets/images/146.png';
import p147 from '../assets/images/147.png';
import p148 from '../assets/images/148.png';
import p149 from '../assets/images/149.png';
import p150 from '../assets/images/150.png';
import p151 from '../assets/images/151.png';
import a1 from '../assets/images/a1.png';
import a2 from '../assets/images/a2.png';
import a3 from '../assets/images/a3.png';
import a4 from '../assets/images/a4.png';
import a5 from '../assets/images/a5.png';
import a6 from '../assets/images/a6.png';
import a7 from '../assets/images/a7.png';
import a8 from '../assets/images/a8.png';
import a9 from '../assets/images/a9.png';
import a10 from '../assets/images/a10.png';
import a11 from '../assets/images/a11.png';
import a12 from '../assets/images/a12.png';
import a13 from '../assets/images/a13.png';
import a14 from '../assets/images/a14.png';
import a15 from '../assets/images/a15.png';
import a16 from '../assets/images/a16.png';
import a17 from '../assets/images/a17.png';
import a18 from '../assets/images/a18.png';
import a19 from '../assets/images/a19.png';
import a20 from '../assets/images/a20.png';
import ap1 from '../assets/images/ap1.png';
import ap2 from '../assets/images/ap2.png';
import ap3 from '../assets/images/ap3.png';
import ap4 from '../assets/images/ap4.png';
import ap5 from '../assets/images/ap5.png';
import ap6 from '../assets/images/ap6.png';
import ap7 from '../assets/images/ap7.png';
import ap8 from '../assets/images/ap8.png';
import ap9 from '../assets/images/ap9.png';
import ap10 from '../assets/images/ap10.png';
import ap11 from '../assets/images/ap11.png';
import s1 from '../assets/images/s1.png';
import s2 from '../assets/images/s2.png';
import s3 from '../assets/images/s3.png';
import s4 from '../assets/images/s4.png';
import s5 from '../assets/images/s5.png';
import s6 from '../assets/images/s6.png';
import s7 from '../assets/images/s7.png';
import s8 from '../assets/images/s8.png';
import s9 from '../assets/images/s9.png';
import s10 from '../assets/images/s10.png';
import s11 from '../assets/images/s11.png';
import s12 from '../assets/images/s12.png';
import s13 from '../assets/images/s13.png';
import s14 from '../assets/images/s14.png';
import s15 from '../assets/images/s15.png';
import s16 from '../assets/images/s16.png';
import s17 from '../assets/images/s17.png';
import s18 from '../assets/images/s18.png';
import s19 from '../assets/images/s19.png';
import s20 from '../assets/images/s20.png';
import s21 from '../assets/images/s21.png';
import s22 from '../assets/images/s22.png';
import s23 from '../assets/images/s23.png';
import s24 from '../assets/images/s24.png';
import s25 from '../assets/images/s25.png';
import s26 from '../assets/images/s26.png';
import s27 from '../assets/images/s27.png';
import s28 from '../assets/images/s28.png';
import s29 from '../assets/images/s29.png';
import s30 from '../assets/images/s30.png';
import h1 from '../assets/images/h1.png';
import h2 from '../assets/images/h2.png';
import h3 from '../assets/images/h3.png';
import h4 from '../assets/images/h4.png';
import h5 from '../assets/images/h5.png';
import h6 from '../assets/images/h6.png';
import h7 from '../assets/images/h7.png';
import h8 from '../assets/images/h8.png';
import h9 from '../assets/images/h9.png';
import h10 from '../assets/images/h10.png';
import h11 from '../assets/images/h11.png';
import h12 from '../assets/images/h12.png';
import h13 from '../assets/images/h13.png';
import h14 from '../assets/images/h14.png';
import h15 from '../assets/images/h15.png';
import h16 from '../assets/images/h16.png';
import h17 from '../assets/images/h17.png';
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';
import f5 from '../assets/images/f5.png';
import f6 from '../assets/images/f6.png';
import f7 from '../assets/images/f7.png';
import f8 from '../assets/images/f8.png';
import f9 from '../assets/images/f9.png';
import f10 from '../assets/images/f10.png';
import f11 from '../assets/images/f11.png';
import f12 from '../assets/images/f12.png';
import f13 from '../assets/images/f13.png';
import f14 from '../assets/images/f14.png';
import f15 from '../assets/images/f15.png';
import f16 from '../assets/images/f16.png';
import f17 from '../assets/images/f17.png';
import f18 from '../assets/images/f18.png';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    img: p1,
    images: [p1, p12, p13, p14, p15, p16, p17, p18, p19, p110, p111, p112, p113, p114, p115, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151],
    title: "School Management",
    category: "web development",
    github: "https://github.com/VivekPatel4/School-Management-Sysyem"
  },
  {
    img: a1,
    images: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20],
    title: "Property Management",
    category: "web development",
    github: "https://github.com/VivekPatel4/ATS-System"
  },
  {
    img: ap1,
    images: [ap1, ap2, ap3, ap4, ap5, ap6, ap7, ap8, ap9, ap10, ap11],
    title: "property Management App ",
    category: "applications",
    github: "https://github.com/VivekPatel4/ATS-System"
  },
  {
    img: s1,
    images: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30],
    title: "SHOP",
    category: "web development",
    github: "https://github.com/VivekPatel4/shop"
  },
  {
    img: h1,
    images: [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17],
    title: "Hostel Management(PHP)",
    category: "web development",
    github: "https://github.com/VivekPatel4/Student-Information-Management-System-PHP-"
  },
  {
    img: f1,
    images: [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18],
    title: "Food Order",
    category: "web development",
    github: "https://github.com/VivekPatel4/Food-Shop-Web-Application-ASP.NET-Framework-"
  },
  
];

const categories = [
  { label: "All", value: "all" },
  { label: "Web Design", value: "web design" },
  { label: "Applications", value: "applications" },
  { label: "Web Development", value: "web development" },
];

function Protfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openLightbox = (projectIndex) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const currentProject = filteredProjects[currentProjectIndex];
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    const currentProject = filteredProjects[currentProjectIndex];
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat.value}>
              <button
                className={selectedCategory === cat.value ? "active" : ""}
                onClick={() => setSelectedCategory(cat.value)}
                data-filter-btn
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, idx) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={idx}
            >
              <div onClick={() => openLightbox(idx)} style={{ cursor: 'pointer' }}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub style={{ fontSize: "1.1em" }} />
                    View on GitHub
                  </a>
                )}
                <p className="project-category">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={filteredProjects[currentProjectIndex].images[currentImageIndex]} 
                alt={`${filteredProjects[currentProjectIndex].title} - Image ${currentImageIndex + 1}`}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3>{filteredProjects[currentProjectIndex].title}</h3>
                <p>{filteredProjects[currentProjectIndex].category}</p>
                <span className="lightbox-counter">
                  {currentImageIndex + 1} / {filteredProjects[currentProjectIndex].images.length}
                </span>
              </div>
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default Protfolio;
