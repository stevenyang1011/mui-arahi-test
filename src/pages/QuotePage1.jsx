import * as React from "react";
import QuoteWrapper from "../components/QuoteWrapper";
import Typography from "@mui/material/Typography";
import { Button, Box, Grid, ToggleButton } from "@mui/material";
import QuestionContainer from "../components/QuestionContainer";
import VertCentre from "../components/VertCentre";
import ToggleButtons from "../components/ToggleButtons";
import { Link } from "react-router-dom";
// import ButtonGroup from "../components/ButtonGroup";

export default function QuotePage1() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <QuoteWrapper progress={1}>
        <Typography variant="h1">Find your Car</Typography>
        <Box
          sx={{
            height: "60vh",
            // background: "#FF0000"
          }}
        >
          <VertCentre>
            <QuestionContainer>
              {/* <ToggleButtons /> */}

              <QuestionLockUp />
              <BackNext />
            </QuestionContainer>
          </VertCentre>
        </Box>
      </QuoteWrapper>
    </>
  );
}

function QuestionLockUp() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      <Typography variant="h5" align="center" sx={{ pb: 2 }}>
        Did you buy this car on Finance?
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2} align="center" direction="row">
          <Grid item xs={12} sm={6}>
            <Button
              // onClick={handleClick}
              variant="contained"
              fullWidth
              size="large"
              color={flag ? "grey" : "secondary"}
            >
              Yes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={handleClick}
              variant="contained"
              fullWidth
              size="large"
              color={!flag ? "grey" : "secondary"}
            >
              No
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function BackNext() {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: 12 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} sx={{}}>
            <Link to="/">Home</Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/quote2">
              <Button
                href="/quote2"
                variant="contained"
                fullWidth
                color="primary"
                size="large"
              >
                Continue
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
