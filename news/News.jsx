import React from 'react'
import './news.css'
import { Link } from 'react-router-dom'
import news__banner  from '../../assets/news__banner.png';
import Button from 'react-bootstrap/Button';
import { TbArrowsSort } from 'react-icons/tb';
import {BiTimeFive} from 'react-icons/bi';

const News = () => (
  <div>
    <header id="News__header">
        <div className="News__banner">
          <div className="News__banner__img"></div>
        </div>
    </header>
    <section id="News__section">
      <nav id='News__nav'>
    <div className="d-md-flex justify-content-between m-2">
              <div className="News__none550 text-nowrap d-inline-flex">
                <Link to="/" className="News__text-nowrap">
                  <p>首頁</p>
                </Link>
                <p> ▶ </p>
                <Link to="#" className="News__text-nowrap">
                  <p>展覽空間</p>
                </Link>
              </div>
              <div className="col-7">
              <Button className="News__button" variant="dark"> 
                由新至舊<TbArrowsSort />
              </Button>
              </div>
            </div>
    </nav>
    <main className="News__main">
    <div className='News__main-wrap'>
                                 
              <div classMame="News__img-id-wrap">
              <Link to="./NewsId">
              <img className="News__card-img-top" src={news__banner} />
              <h4 className='News__newsId ' >達文西光影藝術特展</h4>
              <p className='News__article' ><BiTimeFive/>2022-12-01 ~ 2022-12-07</p>
              <p className="News__text">全台首次以達文西為主題的藝術光影特展《走進大師的腦內：李奧納多·達文西-光影體驗展》，將於 12 月 2 日在双融域 AMBI SPACE ONE（台北101五樓）作為亞洲首站展出</p>
              </Link>
              </div>

              <div className="News__img-id-wrap">
            <Link to="./ProductsDetail"> 
              <img className="News__card-img-top" src="https://ak-d.tripcdn.com/images/0352g12000a5wnpl3AE0E_C_1136_640_Q60.jpg?proc=source/trip;namelogo/d_40" />
              <h5 className='News__newsId' >米奇藝術展全球巡展--台北站</h5>
              <p className='News__article' ><BiTimeFive/>2022-11-12 (六)- 2023-02-28 (二)</p>
              <p className="News__text">"全台首展！近 30 位國際藝術家，多種米奇藝術創作，驚奇不斷！

此次展覽所有藝術家將以米奇為題，結合不同風格、創作媒材及藝術創作，透過繪畫、書法、雕塑、編織、裝置等形式多樣的當代藝術作品，全新塑造、賦予家喻戶曉的老朋友－米奇多個嶄新面貌。


首次亮相！Daniel Arsham、GD 權志龍、陳冠希原創米奇作品一次看！

匯集全球頂尖潮流藝術家原創作品首度登台，將展出美國藝術家「 Daniel Arsham 」、韓國歌手、饒舌及詞曲作家「 G-Dragon 」、日本頗負盛名的時尚設計師及饒舌歌手「 Nigo 」、香港時尚巨星「 陳冠希 」、台灣裔美國畫家「 James Jean 」等多位在時尚潮流界佔有一席之地的藝術家們以「米奇」為主題，創作出屬於藝術家們的潮流米奇概念藝術作品！"</p>
              </Link>
              </div>
             

     
              <div className="News__img-id-wrap">
            <Link to="/">     
              <img className="News__card-img-top" src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/t9kk4qqa6hepgtebwkml.webp" />
           
              <h5 className='News__newsId' >感知現場─建築×藝術跨界展</h5>
              <p className='News__article' ><BiTimeFive/>2022-10-15 (六)~2023-2-12(日)</p>
              <p className="News__text">"「感知」，是一種看不見卻真實存在並難以言喻的感受與察覺，超越慣常的文字語言與知識體系。

本展邀請藝術家王德瑜與建築師林柏陽以忠泰美術館的空間為基礎，進行長期互動和對話，從藝術與建築兩種原本不同的思考角度與創作語彙，跨界合作，回應美術館空間本身，共同創造突破既定框架的新空間，邀請觀眾梭巡其中體驗與探索，企圖以此「現場」召喚出潛藏於每位觀眾最真實與純粹的感知。

整個美術館空間化作一件作品，觀眾不需要閱讀大量資訊文字，沒有任何理論框架限制，沒有單一標準制式的解釋。光與影、聲響與寧靜、堅硬與柔軟，在此空間中的各種樣態與面貌，皆由觀者本身的感知來定義。

本展企圖解開長久以來被約制的既定參觀展覽行為，引領觀眾實際以身體來探索在慣常所處之外，另一個不易察覺，卻與他人共感的界域向度，透過人與空間、自我與他者所建立的不斷變化的動態關係，進而思索存在的狀態或形式的可能性。"</p>
              </Link>
              </div>
             
          

              <div className="News__img-id-wrap">
            <Link to="/">
              <img className="News__card-img-top" src="https://d3d9mb8xdsbq52.cloudfront.net/s3/221230/123236tfc.jpg"  />
            
              <h5 className='News__newsId' >冬雨．遠山．近海―宜蘭當代女性藝術家</h5>
              <p className='News__article' ><BiTimeFive/>2022-12-3-2023-4-9</p>
              <p className="News__text">「冬雨．遠山．近海―宜蘭當代女性藝術家」，以宜蘭的人文特色，好山好水，加上各個女性藝術家都對宜蘭有許多的淵源記憶和故事描述，將對故鄉的情懷轉化成對當代藝術的觸角，延伸更深廣的美學內涵，注入更多元的創新面貌，繼而眺望這片土地的過去、現在和未來。藝術家以她們敏銳的內心思索方式，運用各種不同媒材詮釋故鄉的人文記憶和感情對話，喚起對地方的濃厚情感。</p>
              </Link>
              </div>
             
        

      
              <div className="News__img-id-wrap">
             <Link to="/">
               <img className="News__card-img-top" src="https://s3.resource.opentix.life/upload/program/1661484208466q9AKB2ZlCN.jpeg"/>

            
               <h5 className='News__newsId'>想你到月球｜張雨生特展 FLY ME TO THE MOON & BACK</h5>
               <p className='News__article' ><BiTimeFive/>2022-11-12 (六)- 2023-02-28 (二)</p>
               <p className="News__text">"張雨生一生創作出許多膾炙人口的作品，音樂創作風格多變，有「音樂魔術師」之稱。
第 28 屆金曲獎獲頒「特別貢獻獎」、被認為是台灣華語樂壇史上最優秀的歌手之一。
藉由一場漫步太空的體驗，跟著太空人張雨生參與一場太空登月計畫。
透過田野、訪調與研究，讓您認識與了解張雨生的個人魅力與音樂成就。
結合五組當代音樂人重新詮釋張雨生的音樂，再次挖掘「音樂」的本質魅力。"</p>
               </Link>
               </div>
            

               <div className="News__img-id-wrap">              
              <Link to="/">
               
              <img className="News__card-img-top" src="https://d2onjhd726mt7c.cloudfront.net/images/datas/000/097/142/zwoajptmgl20pqh7st01jtwm20nm6uyb_1400x800.jpg" />
              
              <h5 className='News__newsId' >【問世間，情不為何物】2022台灣美術雙年展</h5>
              <p className='News__article' ><BiTimeFive/>2022-11-05 ~ 2023-03-05</p>
              <p className="News__text">"展覽標題「問世間，情不為何物」，典故出自西元十二世紀詩人元好問的「雁丘詞」，其膾炙人口的「問世間，情為何物，直教生死相許」詩句，在此轉變為否定問句，把兒女私情的通俗意涵，轉化為數位技術時代裡對「有情眾生」本性的追問。

「情」字，在中文語境中具有多重的意涵：從「心」字根，指涉心的動力，由此衍生出 「情動」、「情慾」、「情緒」、「情懷」等，但是，相對於愛慾之情，在古代形而上學的討論中，「情」還有更深遠的意涵，禮記禮運篇有云：「何謂人情？喜、怒、哀、懼、愛、惡、欲，七者弗學而能」，一方面把情視為本性，本然之情；另一方面也顧及性情的動態面向———情之動，而且是不經學習而本來就具有的生命動能。更以此引伸出宇宙中生生不息的動態情勢、情況、實情，所以，作為存在的基本樣態，情境、事情、情狀或情態(state of affairs) 等字眼，因此，「情」不是一個可以單位化的存有物，而是在宇宙間森然萬象之中的動態關係，透過展現樣態之差異、強弱虛實之不同，而顯現之為「有情」。

「情」的形而上學歷史，也反映在佛教中「有情眾生」概念的演變中，在原始佛教裡，有情眾生（sentient beings, 或梵文的 sattva「薩埵」）係指墮入六道輪迴的一切有意識的生命，而佛教的宗旨就在於如何使一切有情眾生從輪迴之中得到解說。菩薩（Bodhi-sattva）亦即「覺醒-有情」，既指發心求入佛道的有情眾生；也可指上求菩提下化眾生者；或指具足智慧、自在生死輪迴而擁有度化眾生能力之大菩薩。大乘佛教提出「眾生皆有佛性」，皆能覺醒證悟佛道空理，更進一步，延伸到非意識的眾生（insentient beings）也有佛性（Getz 2004），因此，情與意識的脫鉤，讓情變成宇宙浩然流行的動力，這正好呼應「情」字在中文語境中的形上學意涵：情不為何物？何物不為情？從「有情眾生」或「薩埵」的歷史發展來看，如果眾生皆有佛性，那麼，今天的我們要問技術物或數位物是否皆有佛性、皆「有情」？

而每兩年發生一次的台灣雙年展，其任務不僅在於檢視現今藝術的主要趨勢或創作方向，同時也要透過藝術創作，反映出屬於這個時代的重大議題，提供給大眾對話與反思的憑藉。因此，「問世間，情不為何物」展覽將從對「情」的探問出發，討論技術與有情眾生之間共同演化的關係，以此回應當代原民現身和身體表演相關的生命政治，讓當代藝術與技術哲學、跨物種倫理、新泛靈論、原民性、地方性之間形成有意義的、有啟發作用的對話空間，而參展作品則以不同的對話方式，交織穿插在展覽的四個子題之間。
"</p>
              </Link>
              </div>
             
           
      
              <div className="News__img-id-wrap">
            <Link to="ProductsDetail">
              <img className="News__card-img-top" src="https://res.klook.com/image/upload/c_fill,w_1160,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ztcdcpdfbsymxtnnx7cd.webp"  />
             
              <h5 className='News__newsId' >Lurking: a Wellsaid album release show</h5>
              <p className='News__article' ><BiTimeFive/>2023-2-18日 (六)</p>
              <p className="News__text">前陣子搞簽證，把護照拿出來，發現背面還貼著上一次出境演出的 stage pass：2020年12月31日在 The Wall 的跨年演出。想起那晚吃過咖哩，半路和朋友溜出去買啤酒，聊2021要做的事。</p>
              </Link>
              </div>

              <div className="News__img-id-wrap">       
              <Link to="/"> 
              <img className="News__card-img-top" src="https://d2onjhd726mt7c.cloudfront.net/images/datas/000/097/566/e65f6ketqv2czywuvimixa43pfm2zq7y_1400x800.jpg" />
             
              <h5 className='News__newsId' >狂八〇 : 跨領域靈光出現的時代</h5>
              <p className='News__article' ><BiTimeFive/>2022-12-03 ~ 2023-02-26</p>
              <p className="News__text">"本展以作品、檔案、音像紀錄與訪談追索「跨領域」在臺灣八〇年代藝文發展史的脈絡——臺灣的「跨領域」不是現代性的進程，而是社群的存在狀態與出路。展出五大子題：
「前衛與實驗」呈現創作人在紙媒的刺激與西方新形式的啟發下，著手各領域的實驗。
「政治與禁忌」呈現思想、身體與創作在解嚴前、後，日趨自由的社會中解封。
「翻譯術與混種」呈現國際化與歸國學人的增加，大量翻譯物的出版與思潮演化。
「在地、全球化、身份認同」呈現臺灣接軌全球生產鏈，身份與價值也在不同層面上碰撞。
「匯流與前進」以開放空間重塑聚會所氛圍，並規劃系列公眾活動在此發生。"</p>
             
              </Link>
              </div>
    
     
              <div className="News__img-id-wrap">                            
              <Link to="/">
              <img className="News__card-img-top" src="https://d2onjhd726mt7c.cloudfront.net/images/datas/000/095/502/ob8p4pbcsg3009ght67rdmy7amx9fb9j_1400x800.jpg" />
             
              <h5 className='News__newsId' >minä perhonen/皆川明つづく</h5>
              <p className='News__article' ><BiTimeFive/>2022-10-22 ~ 2023-02-19</p>
              <p className="News__text">"「minä perhonen」為日本設計師皆川明所創立的品牌，「至少延續百年」是皆川明創立品牌的初衷。此次展覽以「TSUZUKU（日語：つづく）」作為命題，也有著「延續」之意，除代表品牌在時間軸的延續性，更令人聯想到連續、攜手、循環等人事物所共同產生的連結。不盲目追逐流行的minä perhonen，透過設計與喜悅的串連，在日本引領起「特別的日常服」潮流，其貼近人們生活及溫度的品牌理念，更是獲得世界各地的喜愛與好評。

皆川明是日本當代設計大師關鍵人物之一，在國際時尚設計界更有獨樹一格的特別地位。他在1995年成立了自己的品牌「minä」，正是現在minä perhonen的前身，懷抱著「打造至少延續百年的品牌」的想法，希望即使創始設計師不在，品牌也能永續發展；此外「minä」一詞在芬蘭語中代表「我」，而「perhonen」則有著「蝴蝶」之意，品牌服飾中使用許多豐富多元的花紋布料，就像蝴蝶翅膀多變的紋路一般美不勝收。

在日本頗受歡迎的《minä perhonen／皆川明 つづく》展覽，除了是2019東京都現代美術館重新開館的首展外，也在兵庫縣立美術館、福岡市美術館及青森縣立美術館巡迴展出，預計將在今年10月首度移展海外台灣，為高雄帶來《つづく》展的精彩內容。

為求完美呈現，本展同時也邀請日本知名平面設計師葛西薰（Kaoru Kasai）擔任主視覺設計，建築師田根剛（Tsuyoshi Tane）依據高美館場域規劃8大主題空間，完整展現「minä perhonen」發展至今的脈絡。展覽內容除展示品牌的經典布料、時裝、家飾等設計模型，更有設計師的插畫手稿、設計原稿、錄像以及文獻檔案等展品，讓台灣觀眾能從中一探設計大師皆川明及「minä perhonen」團隊的創作精髓。"</p>
           
              </Link>
              </div>
              </div>
    </main>
    </section>
  </div>
)

export default News
