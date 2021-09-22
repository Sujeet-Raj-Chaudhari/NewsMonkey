import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
    articles = [
        {
            "source": { "id": "nfl-news", "name": "NFL News" },
            "author": null,
            "title": "Tennessee Titans host Waverly Central High School home game at Nissan Stadium to help flood victims",
            "description": "On Thursday night, Nissan Stadium hosted a high school football game between the Waverly Central Tigers and the White House Blue Devils in an effort to help a recovering football program while also raising awareness to a community in need.",
            "url": "https://www.nfl.com/news/tennessee-titans-host-waverly-central-high-school-home-game-at-nissan-stadium-to",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/eyxrteivsw6fmwryrkjr",
            "publishedAt": "2021-09-19T08:37:27.756152Z",
            "content": "The Tennessee Titans organization stepped up in a big way following a tragic event that recently struck its community.\r\nOn Thursday night, Nissan Stadium hosted a high school football game between th… [+1541 chars]"
          },
          {
            "source": { "id": "bleacher-report", "name": "Bleacher Report" },
            "author": "Adam Kramer",
            "title": "Week 3 of College Football Shows Glimpse of Possible Chaos on the Horizon",
            "description": "It is in our nature to overreact in a sport that is largely built on emotion. In college football, a season is segmented up into more than a dozen declarations—a collection of strong opinions based on weekly results that vary wildly in nature...",
            "url": "https://bleacherreport.com/articles/2948521-week-3-of-college-football-shows-glimpse-of-possible-chaos-on-the-horizon",
            "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/917/557/hi-res-1f3afab527d1a723cf32c6c389aab802_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-19T02:45:33Z",
            "content": "John Bazemore/Associated Press\r\nIt is in our nature to overreact in a sport that is largely built on emotion. In college football, a season is segmented up into more than a dozen declarationsa collec… [+4743 chars]"
          },
          {
            "source": { "id": "bleacher-report", "name": "Bleacher Report" },
            "author": "David Kenyon",
            "title": "Winners and Losers from Week 3 of College Football",
            "description": "Alabama made it more interesting than expected, but the Crimson Tide earned a key victory at Florida. The reigning champions lead the winners and losers from Week 3...",
            "url": "https://bleacherreport.com/articles/2948514-winners-and-losers-from-week-3-of-college-football",
            "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/476/004/hi-res-e61eae0e9302539301d922160096eda5_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-18T23:41:09Z",
            "content": "Young Kwak/Associated Press\r\nTwo years ago, Kedon Slovis received his first chance at USC after a leg injury sidelined JT Daniels. Slovis thrived as a true freshman, causing Daniels to leave USC for … [+869 chars]"
          },
          {
            "source": { "id": "fox-sports", "name": "Fox Sports" },
            "author": "FOX Sports",
            "title": "College Football odds: Week 3 betting results, point spreads, lines",
            "description": "There's one word to describe Week 3 of college football: Big. Find out why and all the betting info you need here.",
            "url": "http://www.foxsports.com/stories/college-football/college-football-odds-week-3-betting-results-point-spreads-lines",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/09.13.21_CFB-Week-3-Lines_16x9-1.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-18T19:46:05Z",
            "content": "\"Big\" is certainly a word one could use to describe Week 3 of the 2021 college footballseason, particularly when it comes to betting.\r\nThere are big point spreads for heavy favorites to cover, big-ti… [+12678 chars]"
          },
          {
            "source": { "id": "axios", "name": "Axios" },
            "author": "Erin Doherty, Kierra Frazier",
            "title": "Harris makes surprise visit at Howard University football game",
            "description": "Second gentleman Doug Emhoff then through out the ceremonial first pitch at a Washington Nationals game.",
            "url": "https://www.axios.com/harris-surprise-visit-howard-football-game-67443972-22dc-4332-a9b9-418b84c5c1c8.html",
            "urlToImage": "https://images.axios.com/-idCrGwYRLGGF4kX9FK8_YLfWa8=/0x21:5000x2834/1366x768/2021/09/18/1631985618185.jpg",
            "publishedAt": "2021-09-18T17:49:57Z",
            "content": "The Department of Homeland Security on Saturday announced plans to ramp up deportation flights to Haiti out of the small Texas border town Del Rio, starting as soon as Sunday.\r\nWhy it matters: Report… [+282 chars]"
          },
          {
            "source": { "id": "fox-sports", "name": "Fox Sports" },
            "author": "FOX Sports",
            "title": "College football Week 3: Top moments from Nebraska-Oklahoma, Alabama-Florida, more",
            "description": "Week 3 of college football is underway with Nebraska-Oklahoma and Va Tech-WVU. Here are the top moments from Saturday!",
            "url": "http://www.foxsports.com/stories/college-football/week-3-top-moments-highlights-oklahoma-nebraska-texas-am-cincinnati-virginia-tech-miami-notre-dame-alabama-florida-clemson-ohio-state",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.18.21_CFB-Top-plays-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-18T17:08:04Z",
            "content": "Week 3 of the 2021 college football season is bringing fans some first-rate matchups on Saturday.\r\nKicking things off is the return of one of the most historic rivalries in college football, 50 years… [+1813 chars]"
          },
          {
            "source": { "id": "espn", "name": "ESPN" },
            "author": "Mike ClayESPN Writer ",
            "title": "The Playbook - Your ultimate fantasy football guide to Week 2",
            "description": "Mike Clay provides an all-encompassing look at the Week 2 matchups to exploit and avoid in weekly fantasy and DFS, including a projected final score.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/32171140/the-playbook-your-ultimate-fantasy-football-guide-week-2",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0917%2Fr910276_1296x729_16%2D9.jpg",
            "publishedAt": "2021-09-17T16:39:00Z",
            "content": "Welcome to the Week 2 Fantasy Football Playbook!\r\nThis will be your game-by-game guide to the week's slate of NFL games, featuring score projections, over/unders, win probabilities and, of course, ea… [+39712 chars]"
          },
          {
            "source": { "id": "bleacher-report", "name": "Bleacher Report" },
            "author": "Morgan Moriarty",
            "title": "6 Biggest Surprises of the 2021 College Football Season so Far",
            "description": "The 2021 college football season is well underway, and so it goes every year in the sport, there are the usual fair share of expected storylines. The SEC, ACC, Big Ten, and Big 12 look primed to have teams in the College Football Playoff once again...",
            "url": "https://bleacherreport.com/articles/2948455-six-biggest-surprises-of-the-2021-college-football-season-so-far",
            "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/475/732/hi-res-957aa999ac442769696fd1462f15d8e3_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-16T11:00:08Z",
            "content": "Gaelen Morse/Getty Images\r\nThe Buckeyes returned five defensive starters from last season, and the unit has struggled quite a bit. Even during Ohio State's last game of the season a year ago in the n… [+1403 chars]"
          },
          {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
          }
    ]

    constructor(){
        super();
        console.log("This is my constructor from news")
        this.state = {
            articles :this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2>
                <i>News Monkey's - Top HeadLines</i>
            </h2>
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col my-2 md-3" key = {element.url}>
                        <NewsItems title={element.title.slice(0, 45)} description={element.description.slice(0, 88)}
                        imageUrl = {element.urlToImage}
                        newsUrl = {element.url} />
                      </div>  
              })}
            </div>
        </div>
      </div>
    );
  }
}

export default News;
