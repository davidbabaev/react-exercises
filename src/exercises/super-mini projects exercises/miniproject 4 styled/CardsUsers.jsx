import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  TextField,
  Button,
  IconButton,
  Chip,
  Grid,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Skeleton,
  Alert,
  Tooltip,
  Badge,
  Divider,
  Paper,
  Fade,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import SortIcon from '@mui/icons-material/Sort';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonIcon from '@mui/icons-material/Person';
import useDebounceUsers from './useDebounceUsers';

export default function CardsUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [inputCounter, setCounter] = useState(0);
  const [sortOrder, setSortOrder] = useState('none');
  const [sortByCity, setSortByCity] = useState('');
  const [sortByFav, setSortByFav] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  const toggleFavorites = (userId) => {
    let newFavorites;
    if (favorites.includes(userId)) {
      newFavorites = favorites.filter((id) => id !== userId);
    } else {
      newFavorites = [...favorites, userId];
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
    setCounter(newValue.length);
  };

  const handleClearSearch = () => {
    setInput('');
    setCounter(0);
  };

  const handleSortAsc = () => setSortOrder('asc');
  const handleSortDesc = () => setSortOrder('desc');
  const handleCityChange = (e) => setSortByCity(e.target.value);
  
  const handleSortReset = () => {
    setSortOrder('none');
    setSortByFav(false);
    setSortByCity('');
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    fetchUser();
  }, []);

  const handleNavigate = (id) => {
    navigate(`/users/user/${id}`);
  };

  const debounceValue = useDebounceUsers(input, 500);
  const isSearching = input.trim() !== '' && input !== debounceValue;

  // Filter chain
  let filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debounceValue.toLowerCase())
  );

  if (sortByCity !== '') {
    filteredUsers = filteredUsers.filter((user) => user.address.city === sortByCity);
  }

  if (sortByFav) {
    filteredUsers = filteredUsers.filter((user) => favorites.includes(user.id));
  }

  // Sorting
  let sortedUsers = [...filteredUsers];
  if (sortOrder === 'asc') {
    sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'desc') {
    sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Get unique cities for dropdown
  const uniqueCities = [...new Set(users.map((user) => user.address.city))];

  // Check if any filter is active
  const hasActiveFilters = sortOrder !== 'none' || sortByCity !== '' || sortByFav;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ mb: 1, color: 'text.primary' }}>
          User Directory
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Browse, search, and organize your users
        </Typography>
      </Box>

      {/* Search and Filter Controls */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'grey.200',
          backgroundColor: 'white',
        }}
      >
        {/* Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            value={input}
            onChange={handleInput}
            placeholder="Search users by name..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'grey.400' }} />
                </InputAdornment>
              ),
              endAdornment: input && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClearSearch}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'grey.50',
              },
            }}
          />
          {inputCounter > 0 && (
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: 'block',
                color: inputCounter > 20 ? 'error.main' : 'text.secondary',
              }}
            >
              {inputCounter}/30 characters
            </Typography>
          )}
        </Box>

        {/* Filter Controls */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <SortIcon fontSize="small" />
            Sort & Filter:
          </Typography>

          {/* Sort Buttons */}
          <Button
            variant={sortOrder === 'asc' ? 'contained' : 'outlined'}
            size="small"
            startIcon={<ArrowUpwardIcon />}
            onClick={handleSortAsc}
            sx={{ minWidth: 'auto' }}
          >
            A-Z
          </Button>

          <Button
            variant={sortOrder === 'desc' ? 'contained' : 'outlined'}
            size="small"
            startIcon={<ArrowDownwardIcon />}
            onClick={handleSortDesc}
            sx={{ minWidth: 'auto' }}
          >
            Z-A
          </Button>

          {/* Favorites Button */}
          <Badge
            badgeContent={favorites.length}
            color="secondary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.65rem',
                height: 18,
                minWidth: 18,
              },
            }}
          >
            <Button
              variant={sortByFav ? 'contained' : 'outlined'}
              size="small"
              color={sortByFav ? 'secondary' : 'primary'}
              startIcon={sortByFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={() => setSortByFav(!sortByFav)}
            >
              Favorites
            </Button>
          </Badge>

          {/* City Filter */}
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="city-filter-label">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LocationCityIcon fontSize="small" />
                City
              </Box>
            </InputLabel>
            <Select
              labelId="city-filter-label"
              value={sortByCity}
              onChange={handleCityChange}
              label="City"
            >
              <MenuItem value="">All Cities</MenuItem>
              {uniqueCities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Reset Button */}
          {hasActiveFilters && (
            <Tooltip title="Reset all filters">
              <Button
                variant="text"
                size="small"
                startIcon={<RestartAltIcon />}
                onClick={handleSortReset}
                sx={{ color: 'text.secondary' }}
              >
                Reset
              </Button>
            </Tooltip>
          )}
        </Box>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {sortOrder !== 'none' && (
              <Chip
                label={`Sort: ${sortOrder === 'asc' ? 'A-Z' : 'Z-A'}`}
                size="small"
                color="primary"
                variant="outlined"
                onDelete={() => setSortOrder('none')}
              />
            )}
            {sortByCity && (
              <Chip
                label={`City: ${sortByCity}`}
                size="small"
                color="primary"
                variant="outlined"
                onDelete={() => setSortByCity('')}
              />
            )}
            {sortByFav && (
              <Chip
                label="Favorites only"
                size="small"
                color="secondary"
                variant="outlined"
                onDelete={() => setSortByFav(false)}
              />
            )}
          </Box>
        )}
      </Paper>

      {/* Results Info */}
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {isSearching ? (
          <Chip
            icon={<SearchIcon />}
            label="Searching..."
            color="primary"
            variant="outlined"
            sx={{ animation: 'pulse 1.5s infinite' }}
          />
        ) : (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Showing <strong>{sortedUsers.length}</strong> of {users.length} users
          </Typography>
        )}
      </Box>

      {/* No Results Message */}
      {!isSearching && sortedUsers.length === 0 && debounceValue && (
        <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
          No users found matching "<strong>{debounceValue}</strong>". Try a different search term.
        </Alert>
      )}

      {/* Loading State */}
      {isLoading ? (
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card>
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" height={32} />
                  <Skeleton variant="text" width="60%" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        /* User Cards Grid */
        <Fade in={!isSearching}>
          <Grid container spacing={3}>
            {sortedUsers.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* Favorite Button */}
                  <IconButton
                    onClick={() => toggleFavorites(user.id)}
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      zIndex: 1,
                      backgroundColor: 'white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      '&:hover': {
                        backgroundColor: 'white',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {favorites.includes(user.id) ? (
                      <FavoriteIcon sx={{ color: 'secondary.main' }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ color: 'grey.400' }} />
                    )}
                  </IconButton>

                  {/* User Avatar */}
                  <Box
                    sx={{
                      height: 200,
                      background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={`https://i.pravatar.cc/150?img=${user.id}`}
                      alt={user.name}
                      sx={{
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        border: '4px solid white',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      }}
                    />
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ flexGrow: 1, pt: 2.5 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 1,
                        color: 'text.primary',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {user.name}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1.5,
                        color: 'text.secondary',
                      }}
                    >
                      <BusinessIcon fontSize="small" />
                      <Typography variant="body2" noWrap>
                        {user.company.name}
                      </Typography>
                    </Box>

                    <Chip
                      icon={<LocationCityIcon />}
                      label={user.address.city}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
                  </CardContent>

                  <Divider />

                  {/* Card Actions */}
                  <CardActions sx={{ p: 2 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PersonIcon />}
                      onClick={() => handleNavigate(user.id)}
                      sx={{
                        background: 'linear-gradient(135deg, #3730A3 0%, #6366F1 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #1E1B4B 0%, #3730A3 100%)',
                        },
                      }}
                    >
                      View Profile
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>
      )}

      {/* Empty Favorites State */}
      {sortByFav && sortedUsers.length === 0 && !debounceValue && (
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 3,
          }}
        >
          <FavoriteBorderIcon
            sx={{
              fontSize: 64,
              color: 'grey.300',
              mb: 2,
            }}
          />
          <Typography variant="h4" sx={{ color: 'text.secondary', mb: 1 }}>
            No Favorites Yet
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Click the heart icon on any user card to add them to your favorites
          </Typography>
          <Button variant="outlined" onClick={() => setSortByFav(false)}>
            Show All Users
          </Button>
        </Box>
      )}
    </Box>
  );
}
