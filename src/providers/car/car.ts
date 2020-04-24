import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CarProvider {
  ranger : any;
  everest : any;

  constructor(public http: HttpClient) 
  {
    this.ranger=[
      {
        id:1,
        name: "RANGER XL",
        detail: "ฟอร์ด เรนเจอร์ โอเพ่นแค็บ เอ็กแอล ส่วนลดพิเศษสูงสุด 48,000 บาท พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Ranger_2018_THTH/open-cab-2-2l-xl-6mt/carousel/exterior/6_Aluminum_Metallic/1.jpg",
        price : "559,000 บาท",
      },
      {
        id:2,
        name: "RANGER XL+",
        detail: "ฟอร์ด เรนเจอร์ โอเพ่นแค็บ เอ็กแอลพลัส ดาวน์เพียง 9,999 บาท* พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ ผ่อนเพียง 6,999 บาท ต่อเดือน** พร้อมฟรีประกันภัยชั้นหนึ่ง หมายเหตุ: *ส่วนลดเงินดาวน์ 23,150 บาท ที่ดาวน์ 5% สำหรับรถฟอร์ด เรนเจอร์ รุ่น Open Cab 2.2L XL+ 4x2 HR ** คำนวณที่ดาวน์ 25% ผ่อนนาน 84 เดือน หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Ranger_2018_THTH/open-cab-2-2l-xl-plus-hi-rider-6mt/carousel/exterior/6_Arctic_white/1.jpg",
        price : "663,000 บาท",
      },
      {
        id:3,
        name: "RANGER XLT",
        detail: "ฟอร์ด เรนเจอร์ ดับเบิลแค็บ เอ็กแอลที - อัตราดอกเบี้ย 0% ดาวน์ 25% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ ดาวน์เพียง 49,000 บาท* พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensur หมายเหตุ: *ส่วนลดเงินดาวน์ 34,900 บาท ที่ดาวน์ 10% สำหรับฟอร์ด เรนเจอร์ Double Cab 2.2L XLT 4x2 HR MT หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Ranger_2018_THTH/open-cab-2-2L-XLT-Hi-Rider-6MT/carousel/exterior/6_Lightning_Blue_TH/1.jpg",
        price : "889,000 บาท",
      },
      {
        id:4,
        name: "RANGER FX4",
        detail: "ฟอร์ด เรนเจอร์ เอฟเอ๊กซ์โฟร์ ใหม่ราคาพิเศษช่วงแนะนำ 899,000 บาท (จากราคาปกติ 919,000 บาท) พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ อัตราดอกเบี้ย 0% ดาวน์ 25% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensureหรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/ford/th/th_th/home/buying/latest-offers/_jcr_content/par/splitter/splitter0/mediacarouselitem/image.imgs.full.high.jpg/1586426880908.jpg",
        price : "994,000 บาท",
      },
      {
        id:5,
        name: "RANGER WILDTRAK",
        detail: "ฟอร์ด เรนเจอร์ ไวล์ดแทรค อัตราดอกเบี้ย 0% ดาวน์ 25% ผ่อนนาน 48 เดือน ฟรีประกันภัยชั้นหนึ่ง Ford Ensure พร้อมฟรี “โปรแกรม Ford Beyond พร้อมดูแลคุณ นาน 5 ปี” Ford Beyond: คลิกเพื่อดูรายละเอียด หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่นดูรายละเอียดรถ",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Ranger_2018_THTH/double-cab-2-0l-turbo-wildtrak-hi-rider-10at/carousel/exterior/6_Saber/1.jpg",
        price : "1,029,000 บาท",
      },
      
    ];

    this.everest=[
      {
        id:1,
        name: "TITANIUM",
        detail: "ฟอร์ด เอเวอเรสต์ ใหม่ อัตราดอกเบี้ย 0% ดาวน์ 30% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Everest_2018_THTH/2-0L-Turbo-Titanium-4-2-10AT/carousel/exterior/THTH_Colour_079/1.jpg",
        price : "1,399,000 บาท",
      },
      {
        id:2,
        name: "TITANIUM SPORT",
        detail: "ฟอร์ด เอเวอเรสต์ ใหม่ อัตราดอกเบี้ย 0% ดาวน์ 30% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Everest_2018_THTH/2_0L_Turbo_Titanium_4_2_10AT_SPORT/carousel/exterior/THTH_Colour_076/1.jpg",
        price : "1,499,000 บาท",
      },
      {
        id:3,
        name: "TITANIUM+ 4x2",
        detail: "ฟอร์ด เอเวอเรสต์ ใหม่ อัตราดอกเบี้ย 0% ดาวน์ 30% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Everest_2018_THTH/2-0L-Turbo-TitaniumPLUS-4-2-10AT/carousel/exterior/6_deep_crystal_blue/1.jpg",
        price : "1,559,000 บาท",
      },
      {
        id:4,
        name: "TITANIUM+ 4x4",
        detail: "ฟอร์ด เอเวอเรสต์ ใหม่ อัตราดอกเบี้ย 0% ดาวน์ 30% ผ่อนนาน 48 เดือน พร้อมฟรีประกันภัยชั้นหนึ่ง Ford Ensure หรือ Defer Payment 3 Months หมายเหตุ: เริ่มชำระค่างวดงวดแรกหลังจากได้ทำการส่งมอบรถ 90 วัน สำหรับฟอร์ด เรนเจอร์ และฟอร์ด เอเวอเรสต์ทุกรุ่น",
        img :"https://www.ford.co.th/content/dam/Ford/website-assets/ap/th/buildprice/Everest_2018_THTH/2-0l-Bi-turbo-titaniumplus_4-4-10at/carousel/exterior/6_Diffused_Silver_Metallic/1.jpg",
        price : "1,799,000 บาท",
      }
  ];

  }

loadranger(){
    return Promise.resolve(this.ranger);
    }
  
  Idranger(Idranger:any){
    let ranger = this.ranger.find( ({id}) => id===Idranger );
      return Promise.resolve(ranger);
    }



  loadeverest(){
      return Promise.resolve(this.everest);
      }
    
  Ideverest(Ideverest:any){
      let everest = this.everest.find( ({id}) => id===Ideverest );
        return Promise.resolve(everest);
      }

}