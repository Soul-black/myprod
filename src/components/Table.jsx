import * as React from 'react';
import Array from "./Array";



export default function DenseTable() {
    return (
       <Array rows = {[
        {id:1, name:'Матвей', post:"Сварщик", experience: 4, salary:90000} ,
        {id:2, name: 'Иван', post: "Токарь", experience: 7, salary: 60000},
        {id:3, name:'Константин', post:"Слесарь", experience: 12, salary:35000},
        {id:4, name:'Юрий', post:"Уборщик", experience: 1, salary:12000},
        {id:5, name:'Василий', post:"Мастер", experience: 5, salary:70000},
    ]}/>
    
    );
}