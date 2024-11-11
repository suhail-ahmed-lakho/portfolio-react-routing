import React from "react";
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia, CardActions, Button, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

// Project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Material-UI. Features smooth animations, responsive design, and dynamic content.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    tags: ["React", "Material-UI", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://yourecommerce.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical data visualization.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    tags: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://yourweatherapp.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80",
    tags: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/yourusername/task-app",
    live: "https://yourtaskapp.com",
  },
];

function Projects() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        marginTop: '-60px',
        paddingTop: '80px', // Increased padding for better spacing
        background: 'linear-gradient(45deg, #0a192f, #112240)',
        color: 'white',
        pb: 8, // Add padding bottom for spacing
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <FolderOpenIcon sx={{ fontSize: 40, color: '#64ffda', mb: 2 }} />
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#ccd6f6',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              My Projects
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#8892b0',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              A selection of my recent work and personal projects
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(17, 34, 64, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 30px -15px rgba(2,12,27,0.7)',
                        '& .project-image': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', pt: '56.25%' }}>
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0) 0%, rgba(10, 25, 47, 0.9) 100%)',
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          color: '#ccd6f6',
                          mb: 2,
                          fontWeight: 'bold',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#8892b0',
                          mb: 2,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            sx={{
                              mr: 1,
                              mb: 1,
                              background: 'rgba(100, 255, 218, 0.1)',
                              color: '#64ffda',
                              borderRadius: '4px',
                              '&:hover': {
                                background: 'rgba(100, 255, 218, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <IconButton 
                        href={project.github}
                        target="_blank"
                        sx={{ 
                          color: '#ccd6f6',
                          '&:hover': { color: '#64ffda' },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton 
                        href={project.live}
                        target="_blank"
                        sx={{ 
                          color: '#ccd6f6',
                          '&:hover': { color: '#64ffda' },
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Projects;