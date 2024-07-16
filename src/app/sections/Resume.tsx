import React from 'react'
import './resume.css'
import SectionTitle from '../components/SectionTitle';
import ResumeItem from '../components/ResumeItem';
async function getResumeData(){
  const res = await fetch("http://localhost:3000/api/resume");
  return res.json();
}
export default async function Resume (){
  const items : [] | any = await getResumeData();
  return (
    <section id="resume" className="resume-item">
      <div className="container">
        <SectionTitle
          title="Resume"
          brief="Aliquip aliquip exercitation 
        minim consequat sunt fugiat ullamco qui 
        reprehenderit sunt deserunt laboris. Esse 
          Eiusmod deserunt ipsum enim fugiat 
          aborum."
        />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{items[0].category}</h3>
            {items &&
              items.length > 0 &&
              items[0].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={items.id} item={item} />
              )}
            <h3 className="resume-title">{items[1].category}</h3>
            {items &&
              items.length > 0 &&
              items[1].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={items.id} item={item} />
              )}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">{items[2].category}</h3>
            {items &&
              items.length > 0 &&
              items[2].content.map(
                (item: {
                  id: number;
                  title: string;
                  period: string;
                  brief: string;
                  details: [string];
                }) => <ResumeItem key={items.id} item={item} />
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
