import * as React from "react";
import { Grid, Box } from "@mui/material/";
import PageMargin from "./pageMargin";

export default function PageLayoutBreakout({ children }) {
  return (
    <>
      <PageMargin>
        <Grid
          container
          direction="column"
          //   className="showMe"
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1872, // Skinnier than maxWidth: 1920, Is equal to 1 column extra without a margin
            margin: "0 auto;",
          }}
        >
          {/* <Grid item container> */}
          {/* <Grid item xs={false} xl={1} className="showMe1" /> */}
          <Grid item xs={12} xl={10}>
            {children}
          </Grid>
          {/* <Grid item xs={false} xl={1} className="showMe1" /> */}
        </Grid>
        {/* </Grid> */}
      </PageMargin>
    </>
  );
}
