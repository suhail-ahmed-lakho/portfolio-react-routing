import React from "react";
import { Container, Grid, Typography, Box, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
// Import MUI Icons
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";

function About() {
  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 70px)',
      background: 'linear-gradient(45deg, #000000, #1a1a1a)',
      pt: 3,
      pb: 3
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            {/* Profile Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{ 
                      width: 150, 
                      height: 150, 
                      margin: 'auto',
                      border: '3px solid #64ffda' 
                    }}
                    alt="Suhail Ahmed"
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop"  // 3D abstract image
                  />
                  <Typography variant="h5" sx={{ mt: 2, color: '#64ffda' }}>
                    Suhail Ahmed Lakho
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 2, color: '#8892b0' }}>
                    Full Stack Developer
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* About Section */}
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PersonIcon sx={{ mr: 1, color: '#64ffda' }} />
                  <Typography variant="h5" sx={{ color: '#64ffda' }}>
                    About Me
                  </Typography>
                </Box>
                <Typography paragraph sx={{ color: '#8892b0' }}>
                  I am a passionate Full Stack Developer with expertise in building modern web applications.
                  My journey in software development started with a curiosity for creating innovative solutions,
                  and has evolved into a professional career focused on delivering high-quality code and exceptional user experiences.
                </Typography>
              </Paper>

              {/* Skills Section */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WebIcon sx={{ mr: 1, color: '#64ffda' }} />
                      <Typography variant="h6" sx={{ color: '#64ffda' }}>
                        Frontend
                      </Typography>
                    </Box>
                    <Typography sx={{ color: '#8892b0' }}>
                      • React.js / Next.js<br />
                      • JavaScript / TypeScript<br />
                      • HTML5 / CSS3<br />
                      • Material-UI / Tailwind
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <StorageIcon sx={{ mr: 1, color: '#64ffda' }} />
                      <Typography variant="h6" sx={{ color: '#64ffda' }}>
                        Backend
                      </Typography>
                    </Box>
                    <Typography sx={{ color: '#8892b0' }}>
                      • Node.js / Express<br />
                      • MongoDB / MySQL<br />
                      • RESTful APIs<br />
                      • Firebase / AWS
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {/* Education Section */}
              <Paper elevation={3} sx={{ 
                p: 3, 
                mt: 2,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ mr: 1, color: '#64ffda' }} />
                  <Typography variant="h6" sx={{ color: '#64ffda' }}>
                    Education
                  </Typography>
                </Box>
                <Typography sx={{ color: '#8892b0' }}>
                  Bachelor of Science in Computer Science<br />
                  University of Khairpur Shah Abdul Latif
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
