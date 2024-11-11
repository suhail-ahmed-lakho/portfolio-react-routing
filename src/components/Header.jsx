import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Button,
  Container,
  useScrollTrigger,
  ListItemIcon,
} from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'About', path: '/about', icon: <PersonIcon /> },
  { name: 'Projects', path: '/projects', icon: <WorkIcon /> },
  { name: 'Contact', path: '/contact', icon: <EmailIcon /> },
];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const trigger = useScrollTrigger({
    target: window ? window : undefined
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add handleDrawerToggle function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content
  const drawer = (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #000000, #1a1a1a)',
        height: '100%',
        color: 'white',
        padding: '20px',
      }}
    >
      <IconButton 
        sx={{ color: '#64ffda', mb: 2 }}
        onClick={handleDrawerToggle}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <ListItem 
              component={Link} 
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: location.pathname === item.path ? '#64ffda' : 'white',
                '&:hover': {
                  color: '#64ffda',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        component="nav" 
        sx={{
          background: isScrolled 
            ? 'rgba(10, 25, 47, 0.85)'
            : 'rgba(10, 25, 47, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
          boxShadow: isScrolled 
            ? '0 10px 30px -10px rgba(2,12,27,0.7)'
            : 'none',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1100,
          height: '60px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters
            sx={{ 
              minHeight: '60px !important',
              padding: '0 !important',
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: '#64ffda',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'transparent',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  SA
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon sx={{ color: '#64ffda' }} />
            </IconButton>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? '#64ffda' : 'white',
                      mx: 1,
                      position: 'relative',
                      '&:hover': {
                        color: '#64ffda',
                        '&::after': {
                          width: '100%',
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: location.pathname === item.path ? '100%' : '0%',
                        height: '2px',
                        backgroundColor: '#64ffda',
                        transition: 'width 0.3s ease',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </motion.div>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ height: '60px' }} />

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              background: 'linear-gradient(45deg, #000000, #1a1a1a)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default DrawerAppBar;