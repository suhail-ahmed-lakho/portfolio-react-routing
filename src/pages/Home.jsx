// src/pages/Home.js
import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        marginTop: '-70px',
        paddingTop: '70px',
        background: `linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)),
          url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#64ffda',
                  fontFamily: 'monospace',
                  mb: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '1rem',
                }}
              >
                👋 Hi, my name is
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  background: 'linear-gradient(45deg, #64ffda, #ffffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                  mb: 2,
                  textShadow: '0 0 20px rgba(100, 255, 218, 0.3)',
                }}
              >
                Suhail Ahmed Lakho
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: '#8892b0',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  mb: 4,
                  fontWeight: 300,
                }}
              >
                <span style={{ color: '#64ffda' }}>{'<'}</span>
                Full Stack Developer
                <span style={{ color: '#64ffda' }}>{'/>'}</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: '#8892b0',
                  mb: 4,
                  maxWidth: '600px',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ display: 'flex', gap: '1rem' }}
            >
              <Button
                component={Link}
                to="/projects"
                variant="outlined"
                size="large"
                sx={{
                  color: '#64ffda',
                  borderColor: '#64ffda',
                  padding: '1rem 2rem',
                  borderWidth: '2px',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: '#64ffda',
                    '&::before': {
                      transform: 'scaleX(1)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(100, 255, 218, 0.1)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                    zIndex: -1,
                  }
                }}
              >
                View My Work
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#64ffda',
                  color: '#0a192f',
                  padding: '1rem 2rem',
                  '&:hover': {
                    backgroundColor: '#45b4a1',
                  },
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <KeyboardArrowDownIcon
          sx={{
            color: '#64ffda',
            fontSize: '2.5rem',
            cursor: 'pointer',
            filter: 'drop-shadow(0 0 10px rgba(100, 255, 218, 0.5))',
          }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default Home;
