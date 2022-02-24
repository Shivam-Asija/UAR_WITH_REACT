import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "47%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ css, cardData, type }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let heading = "";
  let timBtnRoute = "";
  let eclipseBtnRoute = "";
  let cardBackgroundColor = "";

  if (type === "admin") {
    heading = cardData.adminHeading;
    timBtnRoute = cardData.adminTimBtnRoute;
    eclipseBtnRoute = cardData.adminEclipseBtnRoute;
    cardBackgroundColor = "rgb(0,98,155)";
  } else {
    heading = cardData.managerHeading;
    timBtnRoute = cardData.managerTimBtnRoute;
    eclipseBtnRoute = cardData.managerEclipseBtnRoute;
    cardBackgroundColor = "rgb(123,123,123)";
  }

  console.log("width", window.innerWidth);

  return (
    <Container
      maxWidth="xs"
      style={{
        display: css.cardCss.display,
      }}
    >
      <Card
        className={`card ${classes.root}`}
        style={{
          backgroundColor: cardBackgroundColor,
          marginRight: css.cardCss.marginRight,
        }}
        variant="outlined"
      >
        <CardContent>
          <div className="card-heading-section">
            <Typography
              variant="h5"
              style={{
                fontWeight: css.cardCss.fontWeight,
                color: css.cardCss.color,
              }}
              className="mt-3"
              component="h2"
            >
              {heading}
            </Typography>
            <Typography
              className={classes.pos}
              style={{
                color: css.cardCss.color,
                fontWeight: css.cardCss.fontWeight,
              }}
              color="textSecondary"
            >
              SIGN IN
            </Typography>
          </div>
          <NavLink to={eclipseBtnRoute}>
            <Button style={css.TimBtn} color="white">
              Eclipse
            </Button>
          </NavLink>
          <NavLink to={timBtnRoute}>
            <Button style={css.EclipseBtn} variant="contained">
              TIM
            </Button>
          </NavLink>
        </CardContent>
      </Card>
    </Container>
  );
}
