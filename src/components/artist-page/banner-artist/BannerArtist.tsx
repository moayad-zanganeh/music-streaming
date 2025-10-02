import { Box, Button, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function BannerArtist() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "456px",
        backgroundImage: "url(/artist-page/baner/Cover.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "16%",
          width: "50%",
          bottom: "28%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* ✅ FIX: use Box as img to allow responsive sx */}
        <Box
          component="img"
          src="/artist-page/baner/Picture.png"
          alt="Artist"
          sx={{
            maxWidth: { xs: "54%", sm: "100%" },
            height: "auto",
            borderRadius: "8px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Adele
          </Typography>
          <Typography component="p" sx={{ mb: 2, color: "#ccc" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "16px",
              width: "fit-content",
              padding: "6px 19px",
              justifyContent: "center",
              alignItems: "center",
              mx: -2,
            }}
          >
            <Button
              sx={{
                width: "120px",
                borderRadius: "32px",
                border: "1px solid #5E63EA",
                background: "#5E63EA",
                color: "#fff",
                height: "32px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                "&:hover": {
                  background: "#4e53d5",
                },
              }}
            >
              <VolumeUpIcon fontSize="small" />
              PLAY ALL
            </Button>

            <Button
              sx={{
                color: "#5E63EA",
                width: "100px",
                border: "1px solid #5E63EA",
                borderRadius: "32px",
                height: "32px",
                textTransform: "none",
              }}
            >
              FOLLOW
            </Button>

            <FavoriteBorderIcon
              fontSize="small"
              sx={{
                background: "#5E63EA",
                borderRadius: "50%",
                padding: "6px",
                width: "32px",
                height: "32px",
                color: "#fff",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
