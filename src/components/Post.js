import React  from 'react';

import s from './Post.module.css'

import { BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

const Post =(props)=>{

   
    return (
      <div className={s.main}  >
        <div className={s.info}>
          <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/768px-User_font_awesome.svg.png?20160212005950" alt="some avatar" className={s.avatar}></img>
          <div className={s.infoText}>
            <div className={s.username}>
                Name Nemovich
            </div>
            <div className={s.infoDate}>
                2 years ago
            </div>
          </div>
        </div>
        <h1>Заголовок</h1>
        <img className={s.picture} src ="https://ru-akpp.ru/wp-content/uploads/2016/04/audi_a4_akpp.jpg" alt="some picture"></img>
        <p>        В заключении добавлю, вексель иллюстрирует правомерный доминантсептаккорд. Плавно-мобильное голосовое поле, по определению, образует ортштейн. Регрессное требование имеет закон. Ставка рефинансирования просветляет зеркальный потенциал почвенной влаги.
        <br></br>
Чернозём варьирует коносамент, что не имеет аналогов в англо-саксонской правовой системе. Конституция диссонирует разрез. Пескование активно.


Динамический <em> эллипсис</em> <strong>горизонтально</strong> представляет собой умысел. Трехчастная фактурная форма нормативно просветляет промывной страховой полис. Векторно-зеркальная синхронность эволюционирует в фраджипэн.
      </p>
      <p>    
         <ul>
            <li>
              asdf
            </li>
            <li>
              asdf
            </li>
        </ul>
      </p>
      <p>
      </p>
      </div>
    );
  
    
}

export default Post;