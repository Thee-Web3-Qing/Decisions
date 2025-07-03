import { Link, useLocation } from 'react-router-dom';
import OnchainKitWallet from './OnchainKitWallet';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useState } from 'react';

const navLinks = [
  { label: 'Stories', path: '/' },
  { label: 'Profile', path: '/profile' },
];

const Header = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        color: '#fff',
        mb: 3
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        py: 1,
        minHeight: '64px'
      }}>
        {/* Logo/Brand */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
            letterSpacing: '-0.5px',
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            flexGrow: { xs: 1, sm: 0 },
            '&:hover': {
              background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }
          }}
        >
          Decisions
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          gap: 1,
          alignItems: 'center',
          ml: 4
        }}>
          {navLinks.map((link) => (
            <Box
              key={link.path}
              component={Link}
              to={link.path}
              sx={{
                textDecoration: 'none',
                color: isActive(link.path) ? '#38bdf8' : '#cbd5e1',
                fontWeight: isActive(link.path) ? 600 : 500,
                fontSize: '0.95rem',
                px: 3,
                py: 1.5,
                borderRadius: '12px',
                transition: 'all 0.2s ease-in-out',
                position: 'relative',
                '&:hover': {
                  color: '#38bdf8',
                  bgcolor: 'rgba(56, 189, 248, 0.08)',
                  transform: 'translateY(-1px)',
                },
                '&::before': isActive(link.path) ? {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '2px',
                  bgcolor: '#38bdf8',
                  borderRadius: '1px'
                } : {}
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>

        {/* Right side - Mobile menu and Wallet */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1
        }}>
          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: '#cbd5e1',
              '&:hover': {
                bgcolor: 'rgba(56, 189, 248, 0.08)',
                color: '#38bdf8'
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Wallet */}
          <Box sx={{ ml: { xs: 0, md: 2 } }}>
            <OnchainKitWallet />
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderLeft: '1px solid rgba(148, 163, 184, 0.1)'
          }
        }}
      >
        <Box 
          role="presentation" 
          onClick={() => setDrawerOpen(false)}
          sx={{ 
            height: '100%',
            pt: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              px: 3,
              py: 2,
              color: '#60a5fa',
              fontWeight: 700,
              borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
              mb: 1
            }}
          >
            Menu
          </Typography>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton 
                  component={Link} 
                  to={link.path} 
                  selected={isActive(link.path)}
                  sx={{ 
                    color: isActive(link.path) ? '#38bdf8' : '#cbd5e1',
                    fontWeight: isActive(link.path) ? 600 : 500,
                    mx: 2,
                    borderRadius: '8px',
                    '&.Mui-selected': {
                      bgcolor: 'rgba(56, 189, 248, 0.08)',
                      '&:hover': {
                        bgcolor: 'rgba(56, 189, 248, 0.12)',
                      }
                    },
                    '&:hover': {
                      bgcolor: 'rgba(56, 189, 248, 0.08)',
                      color: '#38bdf8'
                    }
                  }}
                >
                  <ListItemText 
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: '1rem',
                      fontWeight: 'inherit'
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header; 