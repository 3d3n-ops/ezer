import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Smart Lecture Notes",
    description:
      "Record your lectures and let Ezer's AI transform them into organized, exportable study notes. Focus on understanding your class instead of frantically writing everything down.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Instant Calendar Setup",
    description:
      "Upload your syllabus and Ezer automatically builds your academic calendar with courses, deadlines, and reminders. Your semester schedule, organized in seconds.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "AI Study Questions",
    description:
      "Convert any study material into an interactive quiz. Ezer generates targeted practice questions from your notes, videos, or readings, helping you build confidence through consistent practice.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Interactive Homework Help",
    description:
      "Get unstuck with Ezer's smart workspace. Upload images, draw diagrams, or describe your problem—receive clear, step-by-step guidance in whatever format works best for you.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Seamless Integrations",
    description:
      "Connect Ezer with your favorite tools like Google Calendar, Outlook, Notion, and Excalidraw. Your academic workflow, enhanced and unified in one place.",
  },
];

export default function Features() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Features
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Why Ezer? Here&apos;s why..
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
