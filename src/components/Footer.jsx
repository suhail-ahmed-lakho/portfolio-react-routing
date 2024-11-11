import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <IconButton
              href="https://github.com/yourusername"
              target="_blank"
              sx={{
                color: '#64ffda',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  color: '#64ffda',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              sx={{
                color: '#64ffda',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  color: '#64ffda',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:your.email@example.com"
              sx={{
                color: '#64ffda',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  color: '#64ffda',
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            align="center"
            sx={{ color: '#8892b0' }}
          >
            © {new Date().getFullYear()} Suhail Ahmed Lakho. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Footer; 