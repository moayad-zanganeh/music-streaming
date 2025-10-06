import React from "react";
import { useRouter } from "next/router";
import { Box, Typography, Grid } from "@mui/material";
import { searchCatalog } from "@/lib/search";

export default function SearchPage() {
  const router = useRouter();
  const q = (router.query.q as string) || "";
  const results = React.useMemo(() => searchCatalog(q), [q]);

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, py: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Results for: {q || ""}
      </Typography>
      {results.length === 0 ? (
        <Typography variant="body1">No results found.</Typography>
      ) : (
        <Grid container spacing={2}>
          {results.map((item, idx) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4 as any} key={`${item.title}-${idx}`}>
              <Box sx={{ backgroundColor: "#131A24", borderRadius: 2, overflow: "hidden" }}>
                <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto", display: "block" }} />
                <Box sx={{ p: 1.5 }}>
                  <Typography variant="subtitle1" noWrap>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {item.artist}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}



