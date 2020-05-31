import React, { Component } from 'react'
import {FaCocktail} from 'react-icons/fa'
import {GiKnifeFork, GiRoundTable} from 'react-icons/gi'

export default class Services extends Component {
    state={
        services:[
        {
          icon:<FaCocktail />,
          title:"Free cocktails",
          info:"We know what a cocktail in between a meal means. That's why we offer free fabulous cocktails so you can enjoy your meal with every sip you take. Don't forget to ask for another glass."
        },
        {
            icon:<GiKnifeFork />,
            title:"Unrivaled Menu",
            info:"With the whole new lot of exotic cuisines, eternal buffets, and marvelous dishes, we provide the best of the county to you. Dishes from all around the menus are waiting for you."
        },
        {
            icon:<GiRoundTable />,
            title:"Private Dining",
            info:"At LA 16, we respect your space. Come and feel like home with the all-new and private dining for you and your private moments. After all, private dining tables do not have ears around."
          },
          {
            icon:<i class="fa fa-users"></i>,
            title:"Best Chefs",
            info:"The LA 16 team prides itself on being experts in our trade. Our highly skilled and unmatched cooking staff knows everything about your taste and is eager to provide with the best."
          }
       ]
    }
    render() {
        return (
            <section className="services" id="service">
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div> 
            </section>
        )
    }
}
