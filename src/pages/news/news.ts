import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailnewsPage } from '../detailnews/detailnews';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) 
  {
    this.http.get('http://newsapi.org/v2/top-headlines?country=th&apiKey=f8d298a766e54322afa3baee6c42793e').map(res=>res.json()).subscribe(data=>{
      this.news=data.articles;
      console.log(this.news);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  gotoDetailnews(item:any){
    this.navCtrl.push(DetailnewsPage,{item:item})
  }

}
