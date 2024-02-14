import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About READFIND</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>READFIND</h2>
            {/* <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p> */}
            <div>
              <div> is an application that searches the Open Library's APIs to offer a comprehensive book finding service. By leveraging the APIs provided by Open Library, READFIND taps into a vast database of book information, enabling users to easily locate books, authors, works, and subjects.</div>
              <div>The Open Library's suite of APIs includes:</div>
              <ul>
                <li><strong>RESTful APIs</strong> for accessing data in JSON, YAML, and RDF/XML formats, suitable for various development needs.</li>
                <li><strong>Books API</strong>, which allows for retrieving details on books using standard identifiers such as ISBNs, LCCNs, OCLC Numbers, and Open Library IDs (OLIDs). This API provides essential book information, including titles, authors, cover images, and links to further details.</li>
                <li><strong>Read API</strong>, designed to translate book identifiers into direct links for reading or borrowing books online through Open Library, offering access to borrowable editions and comprehensive data on each book.</li>
                <li><strong>Search API</strong>, enabling complex searches within Open Library's extensive catalog. It supports detailed queries, sorting, and pagination, allowing READFIND users to find books that match specific criteria effectively.</li>
              </ul>
              <div>These APIs collectively support READFIND in creating an engaging and user-friendly experience for book lovers, facilitating easy access to a wide range of literary resources. By integrating these APIs, READFIND serves as a powerful tool for discovering and accessing the wealth of books available in the Open Library's digital repository.</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
