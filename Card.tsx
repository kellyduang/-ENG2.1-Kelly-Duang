import React from 'react';

interface CardProps {
    title:string,
    description:string,
    website?:string // the ? marks this as an optional property
    children?:any
  }
const Card = (props: CardProps) => (
        <aside className="Card" >
            <h2>{ props.title }</h2>
            

            <div className="ItemList"> 
              {props.children}
            </div>
        </aside>
)
export default Card
//Usage sample: <Card title="New Technologist" description="Friends from the TNT program" website="https://newtechnologists.com/"/>

  
