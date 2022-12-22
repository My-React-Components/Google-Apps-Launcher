import "./App.css";
import { useState } from "react";
import { Divider, IconButton, Stack, Tooltip, Avatar } from "@mui/material";
import { Apps as AppsIcon } from "@mui/icons-material";
import { brown } from "@mui/material/colors";
import { Menu, Grid, Container, Button } from "@mui/material";


const ListComponent = (props) => {
  const { list, byPassFirstElement } = props;
  return (
    <Grid
      container
      width="auto"
      margin="10px 5px 10px 16px"
      columnGap={2}
      rowGap={1.5}
      spacing={2}
    >
      {list.map((value, index) => {
        var text = value.innerText;
        var maxLength = 9;
        var isLargeText = text.length > maxLength ? true : false;
        var shortText = text.substring(0, maxLength - 2) + "...";

        return (
          <Grid
            item
            xs={3.5}
            key={index}
            sx={{
              paddingTop: "0px !important",
              paddingLeft: "0px !important",
              padding: "5px",
              textAlign: "center",
              ":hover": {
                backgroundColor: "#e8f0fe",
                borderRadius: "10px",
              },
            }}
          >
            <Tooltip title={text}>
              <a href={value.href}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundImage: `url(
              ${
                !byPassFirstElement && index === 0
                  ? "https://lh3.googleusercontent.com/ogw/AOh-ky0iiUB6yyZq8cHIRi3rOh8ayBNeoq0ILxOFM3e8=s128-b16-cc-rp-mo"
                  : "https://ssl.gstatic.com/gb/images/sprites/p_1x_4f8a89234111.png"
              }
            )`,
                    backgroundPosition: value.backgroundPosition,
                    backgroundSize: "64px",
                    width: 64,
                    height: 64,
                  }}
                ></span>
                <span style={{ display: "inline-block" }}>
                  {isLargeText ? shortText : text}
                </span>
              </a>
            </Tooltip>
          </Grid>
        );
      })}
    </Grid>
  );
};

function App() {
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const handleclick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  var list1 = [
    {
      href: "https://myaccount.google.com/?utm_source=OGB&tab=rk&utm_medium=app",
      innerText: "Account",
    },

    {
      href: "https://www.google.co.in/webhp?tab=rw",
      innerText: "Search",
      backgroundPosition: "0px -2277px",
    },
    {
      href: "https://maps.google.co.in/maps?hl=en&tab=rl",
      innerText: "Maps",
      backgroundPosition: "0px -1587px",
    },
    {
      href: "https://www.youtube.com/?tab=r1",
      innerText: "YouTube",
      backgroundPosition: "0px -207px",
    },
    {
      href: "https://play.google.com/?hl=en&tab=r8",
      innerText: "Play",
      backgroundPosition: "0px -966px",
    },
    {
      href: "https://news.google.com/?tab=rn",
      innerText: "News",
      backgroundPosition: "0px -690px",
    },
    {
      href: "https://mail.google.com/mail/?tab=rm",
      innerText: "Gmail",
      backgroundPosition: "0px -1656px",
    },
    {
      href: "https://meet.google.com/?hs=197&pli=1&authuser=0",
      innerText: "Meet",
      backgroundPosition: "0px -1932px",
    },
    {
      href: "https://chat.google.com/",
      innerText: "Chat",
      backgroundPosition: "0px -1242px",
    },
    {
      href: "https://contacts.google.com/?hl=en&tab=rC",
      innerText: "Contacts",
      backgroundPosition: "0px -345px",
    },
    {
      href: "https://drive.google.com/?tab=ro&authuser=0",
      innerText: "Drive",
      backgroundPosition: "0px -2484px",
    },
    {
      href: "https://calendar.google.com/calendar?tab=rc",
      innerText: "Calendar",
      backgroundPosition: "0px -276px",
    },
    {
      href: "https://translate.google.co.in/?hl=en&tab=rT",
      innerText: "Translate",
      backgroundPosition: "0px -759px",
    },
    {
      href: "https://photos.google.com/?tab=rq&pageId=none",
      innerText: "Photos",
      backgroundPosition: "0px -1380px",
    },
    {
      href: "https://myadcenter.google.com/?ref=app-launcher",
      innerText: "My Ad Center",
      backgroundPosition: "0px -1518px",
    },
    {
      href: "https://www.google.co.in/shopping?hl=en&source=og&tab=rf",
      innerText: "Shopping",
      backgroundPosition: "0px -2898px",
    },
  ];
  var list2 = [
    {
      href: "https://www.google.com/finance?tab=re",
      innerText: "Finance",
      backgroundPosition: "0px -2829px",
    },
    {
      href: "https://docs.google.com/document/?usp=docs_alc&authuser=0",
      innerText: "Docs",
      backgroundPosition: "0px -3174px",
    },
    {
      href: "https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0",
      innerText: "Sheets",
      backgroundPosition: "0px -2967px",
    },
    {
      href: "https://docs.google.com/presentation/?usp=slides_alc&authuser=0",
      innerText: "Slides",
      backgroundPosition: "0px -1035px",
    },
    {
      href: "https://books.google.co.in/?hl=en&tab=rp",
      innerText: "Books",
      backgroundPosition: "0px -621px",
    },
    {
      href: "https://www.blogger.com/?tab=rj",
      innerText: "Blogger",
      backgroundPosition: "0px -483px",
    },
    {
      href: "https://hangouts.google.com/",
      innerText: "Hangouts",
      backgroundPosition: "0px -1173px",
    },
    {
      href: "https://keep.google.com/u/0",
      innerText: "Keep",
      backgroundPosition: "0px -1449px",
    },
    {
      href: "https://jamboard.google.com/?authuser=0&usp=jam_ald",
      innerText: "Jamboard",
      backgroundPosition: "0px -2691px",
    },
    {
      href: "https://classroom.google.com/?authuser=0",
      innerText: "Classroom",
      backgroundPosition: "0px -3036px",
    },
    {
      href: "https://earth.google.com/web/",
      innerText: "Earth",
      backgroundPosition: "0px -2760px",
    },
    {
      href: "https://www.google.co.in/save",
      innerText: "Collections",
      backgroundPosition: "0px -2139px",
    },
    {
      href: "https://artsandculture.google.com/?hl=en&utm_source=ogs.google.com&utm_medium=referral&authuser=0",
      innerText: "Arts and Culture",
      backgroundPosition: "0px 0px",
    },
    {
      href: "https://ads.google.com/home/?subid=ww-ww-xs-ip-awhc-a-ogb_cons!o2",
      innerText: "Google Ads",
      backgroundPosition: "0px -1311px",
    },
    {
      href: "https://podcasts.google.com/",
      innerText: "Podcasts",
      backgroundPosition: "0px -1104px",
    },
    {
      href: "https://one.google.com/?utm_source=app_launcher&utm_medium=web&utm_campaign=all&utm_content=google_oo",
      innerText: "Google One",
      backgroundPosition: "0px -3105px",
    },
    {
      href: "https://www.google.com/travel/?dest_src=al",
      innerText: "Travel",
      backgroundPosition: "0px -2001px",
    },
    {
      href: "https://docs.google.com/forms/?authuser=0&usp=forms_alc",
      innerText: "Forms",
      backgroundPosition: "0px -1863px",
    },
    {
      href: "https://store.google.com/?utm_source=app_launcher&utm_medium=google_oo&utm_campaign=GS107345",
      innerText: "Google Store",
      backgroundPosition: "0px -1794px",
    },
  ];
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Divider light />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
          sx={{ margin: "0px 20px", padding: "8px" }}
        >
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl">Gmail</a>
          <a href="https://www.google.co.in/imghp?hl=en&tab=ri&ogbl">Images</a>

          <Tooltip title="Google Apps">
            <IconButton size="large" onClick={handleclick}>
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <Avatar sx={{ bgcolor: brown["A700"] }}>V</Avatar>
          </IconButton>
        </Stack>
        <Menu
          sx={{
            height: "450px",
            ".MuiPaper-root": {
              width: "350px",
              borderRadius: "10px",
              "&::-webkit-scrollbar": {
                width: "16px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,0.1)",
                borderRadius: "10px",
                border: "4px solid transparent",
                backgroundClip: "padding-box",
                minHeight: "100px",
              },
            },
          }}
          anchorEl={anchorE1}
          open={open}
          onClose={handleClose}
        >
          <ListComponent list={list1} />
          <Divider />
          <ListComponent list={list2} byPassFirstElement={true} />
          <Container sx={{ display: "flex", justifyContent: "center", m: 2 }}>
            <Button
              variant="outlined"
              LinkComponent={"a"}
              href="https://www.google.co.in/intl/en/about/products?tab=rh"
              target="_bl"
            >
              More From Google
            </Button>
          </Container>
        </Menu>
      </div>
    </div>
  );
}

export default App;
