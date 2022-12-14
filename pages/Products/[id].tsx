import type { NextPage } from 'next'
import Head from "next/head";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Button, Grid, IconButton, MenuItem, TextField, Typography} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Products: NextPage = () => {

  const [fixHeader, setFixHeader] = useState(false);

  const onScroll = () => {
    const scrollTop = window.pageYOffset;
    scrollTop > 150 ? setFixHeader(true) : setFixHeader(false);
  };

  const [startDate, setStartDate] = useState<any>();

  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    setStartDate(new Date(year, month, 1))
    setFeature("https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/main.png");

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // const selectDateOption = () => {
  //   const now = new Date();
  //
  //   const year = now.getFullYear();
  //   const month = now.getMonth() + 1;
  //
  //   const result = [];
  //
  //   let i = 1;
  //   while (startDate <= new Date(year, month + 1, 0)) {
  //     result.push(
  //       <option key={i}>
  //         startDate.toISOString().split('T')[0]
  //       </option>
  //     );
  //     i++;
  //     startDate.setDate(startDate.getDate() + 1);
  //   }
  //
  //   console.log(result);
  //
  //   return result;
  // }

  const [feature, setFeature] = useState<string>();

  const onChangeFeature = (e: any) => {
    console.log(e.target);
  }

  return (
    <div style={{ minWidth: "1200px" }}>
      <Head>
        <title>ストーリーツアー - 会員加入</title>

        <meta property="og:url" content="https://www.sanppo.co.kr/" />
        <meta property="og:title" content="ストーリーツアー" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/main.jpeg" />
        {/*<meta property="og:description" content="공유기능 | 열심히 코드를 공부합시다." />*/}
        {/*<meta name="description" content="Generated by create next app" />*/}
        <link rel="icon" href="/icon.svg" />
      </Head>

      <div style={{ position: "relative" }}>
        <header style={
          fixHeader ?
            { backgroundColor: "#383838", height: "150px", lineHeight: "150px", zIndex: "9999", position: "fixed", left: 0, right: 0, display: "flex", justifyContent: "space-around" } :
            { backgroundColor: "#383838", height: "150px", lineHeight: "150px", zIndex: "9999", position: "absolute", left: 0, right: 0, display: "flex", justifyContent: "space-around" }
        }>
          <div>
            <a href={"/"} target={"_parent"} style={{ color: "white", fontSize: "35px" }}>
              ストーリーツアー
            </a>
          </div>

          <div>
            <ul style={{ margin: 0, padding: 0 }}>
              <li style={{ display: "inline-block", padding: "0 20px" }}>
                <a href={"/Company"} target={"_parent"} style={{ color: "white", fontSize: "15px", fontWeight: "700" }}>
                  会社紹介
                </a>
              </li>
              <li style={{ display: "inline-block", padding: "0 20px" }}>
                <a href={"/Products/Imalsan"} target={"_parent"} style={{ color: "#f5343d", fontSize: "15px", fontWeight: "700" }}>
                  プログラム
                </a>
              </li>
              <li style={{ display: "inline-block", padding: "0 20px" }}>
                <a href={"/Gallery"} target={"_parent"} style={{ color: "white", fontSize: "15px", fontWeight: "700" }}>
                  ギャラリー
                </a>
              </li>
              <li style={{ display: "inline-block", padding: "0 20px" }}>
                <a href={"/"} target={"_parent"} style={{ color: "white", fontSize: "15px", fontWeight: "700" }}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href={"/Membership"} target={"_parent"} style={{ color: "white", fontSize: "15px", fontWeight: 700, background: "#f5343d", padding: "8px 15px", borderRadius: "10px" }}>
              予約確認
            </a>
          </div>
        </header>

        <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", paddingTop: 200 }}>
          <div style={{ width: "50%" }}>
            {/* 사진 */}
            <div style={{ position: "relative", border: "1px solid gray", width: 500, height: 500, margin: "0 auto" }}>
              { feature && <Image src={feature} alt={"상품 메인"} fill priority/> }
            </div>

            {/* 상품 리스트 */}
            <div>
              <ul style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: 500, margin: "30px auto", padding: 0, fontSize: 0, listStyle: "none" }}>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }} onMouseEnter={onChangeFeature}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/main.png"} alt={"상품 이미지1"} fill priority />
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }} onMouseEnter={onChangeFeature}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub1.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub2.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub3.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub4.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub5.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub6.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub7.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
                <li style={{ position: "relative", border: "1px solid gray", width: 60, height: 60, marginBottom: 10 }}>
                  <Image src={"https://s3storytour.s3.ap-northeast-2.amazonaws.com/gallery/sub8.jpg"} alt={"상품 이미지1"} fill priority/>
                </li>
              </ul>
            </div>
          </div>

          {/* 상품 정보 */}
          <div style={{ width: "50%" }}>
            <div style={{ width: 500, margin: "0 auto" }}>
              <div>
                <h4 style={{ fontSize: 30, fontWeight: "normal", margin: 0 }}>莉茉山と韓屋村</h4>

                <div style={{ display: "flex", justifyContent: "space-between", margin: "30px 0" }}>
                  {/*<div style={{ border: "1px solid gray", width: 45, height: 45, color: "gray" }}>*/}
                  {/*  <ShareIcon />*/}
                  {/*</div>*/}
                  <Button variant={"outlined"} sx={{ minWidth: 45, borderColor: "gray", color: "gray" }}>
                    <ShareIcon />
                  </Button>

                  <p style={{ fontSize: 24, margin: 0, marginTop: 15, fontWeight: "normal", color: "gray", textAlign: "right" }}>
                    9,000 円
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3.2}>
                    コース注意事項
                  </Grid>
                  <Grid item xs={8.8}>
                    申込みは2名様から可能。集まった場合に催行されます。
                  </Grid>
                </Grid>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3.2}>
                    利用可能日
                  </Grid>
                  <Grid item xs={8.8}>
                    毎日
                  </Grid>
                </Grid>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3.2}>
                    時間
                  </Grid>
                  <Grid item xs={8.8}>
                    09:00 ~13:00（約4時間）
                  </Grid>
                </Grid>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3.2}>
                    催行人数
                  </Grid>
                  <Grid item xs={8.8}>
                    ２名様以上
                  </Grid>
                </Grid>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3.2}>
                    料金に含まれるもの
                  </Grid>
                  <Grid item xs={8.8}>
                    昼食, 入場料、駐車料金、日本語ガイド
                  </Grid>
                </Grid>
              </div>
              <div
                style={{
                  border: "1px solid gray",
                  padding: "30px 50px",
                  // marginTop: 50,
                  margin: "50px auto",
                  // textAlign: "center",
                  width: 500
                }}
              >
                <Typography sx={{ mb: 2 }}>
                  出発日
                </Typography>

                <TextField
                  label={"出発日 (必須)"}
                  select
                  size={"small"}
                  fullWidth
                >
                  <MenuItem>12月 20日</MenuItem>
                  <MenuItem>12月 21日</MenuItem>
                  <MenuItem>12月 22日</MenuItem>
                  <MenuItem>12月 23日</MenuItem>
                  <MenuItem>12月 24日</MenuItem>
                  <MenuItem>12月 25日</MenuItem>
                  <MenuItem>12月 26日</MenuItem>
                  <MenuItem>12月 27日</MenuItem>
                  <MenuItem>12月 28日</MenuItem>
                  <MenuItem>12月 29日</MenuItem>
                  <MenuItem>12月 30日</MenuItem>
                  <MenuItem>12月 31日</MenuItem>
                </TextField>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 30 }}>
                  <Button variant={"outlined"} size={"large"} sx={{ width: "30%" }}>購入する</Button>
                  <Button variant={"outlined"} size={"large"} sx={{ width: "30%" }}>買い物かご</Button>
                  <Button variant={"outlined"} size={"large"} sx={{ width: "30%" }} startIcon={<FavoriteBorderIcon />}>ええ</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div style={{ display: "flex", maxWidth: 800, minHeight: 500, margin: "0 auto", padding: 50 }}>
          <div style={{ position: "relative", border: "1px solid gray", width: "100%", height: "100%", minHeight: 850 }}>
            {/*<Image src={"/imalsan/test.jpeg"} alt={"상세 페이지"} fill />*/}
          </div>
        </div>



        <footer style={{ background: "#f5343d", color: "white", padding: 50, lineHeight: .5, textAlign: "center" }}>
          <p>
            Copyright ⓒ 2022 STORY TOUR All Rights Reserved
          </p>
          <p>
            NATOUR
          </p>
        </footer>

      </div>
    </div>
  )
}

export default Products;
