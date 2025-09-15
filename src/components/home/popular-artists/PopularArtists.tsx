import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'popular artists/image 89.png',
    alt: 'Adele',
    title2: 'Adele',
  },
  {
    src: 'popular artists/Shot 0033_prev_ui 1.png',
    alt: 'Taylor Swift',
    title2: 'Taylor Swift',
  },
  {
    src: 'popular artists/Shot 0023_prev_ui 1.png',
    alt: 'Lady Gaga',
    title2: 'Lady Gaga',
  },
  {
    src: 'popular artists/Billie-Eilish-Happier- 1.png',
    alt: 'Billie Eilish',
    title2: 'Billie Eilish',
  },
  {
    src: 'popular artists/image 95.png',
    alt: 'Ed Sheeran',
    title2: 'Ed Sheeran',
  },
];

export default function PopularArtists() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentItems, setCurrentItems] = useState([...musicItems]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // بررسی وضعیت دکمه‌ها بر اساس موقعیت اسکرول
  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateArrowVisibility();

    // اضافه کردن event listener برای اسکرول
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', updateArrowVisibility);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', updateArrowVisibility);
      }
    };
  }, []);

  const handleScroll = () => {
    if (currentItems.length > 0) {
      // ایجاد یک کپی از آرایه فعلی
      const newItems = [...currentItems];
      // حذف اولین آیتم و اضافه کردن آن به انتهای لیست
      const firstItem = newItems.shift();
      if (firstItem) {
        newItems.push(firstItem);
        setCurrentItems(newItems);
      }
    }
  };

  // محاسبه عرض کارت‌ها بر اساس دستگاه
  const getCardWidth = () => {
    if (isMobile) return 150;
    if (isTablet) return 160;
    return 180;
  };

  return (
    <Box
      sx={{
        width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
        px: { xs: 1, sm: 2, md: 3, lg: 4 },
        m: '5% auto',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          width: '100%',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          }}
        >
          Popular Artists
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            cursor: 'pointer',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
          }}
        >
          View More
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleScroll}
          sx={{
            position: 'absolute',
            right: { xs: '-40px', sm: '-44px', md: '-48px', lg: '-56px' },
            top: '32%',
            zIndex: 2,
            color: 'white',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: { xs: '15px', sm: '20px', md: '25px', lg: '30px' },
            pb: 2,
            pr: 4,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {currentItems.map((item, index) => (
            <Box
              key={`${item.title2}-${index}`}
              sx={{
                textAlign: 'left',
                minWidth: getCardWidth(),
                maxWidth: getCardWidth(),
                flexShrink: 0,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 160, sm: 170, md: 180, lg: 180 },
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />

                <Box
                  sx={{
                    mt: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="popular artists/Group 1276.svg"
                    alt="Decoration"
                    style={{
                      width: '100%',
                      position: 'relative',
                      top: '-218px',
                      zIndex: -1,
                      height: 'auto',
                    }}
                  />
                </Box>

                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      px: 1,
                    }}
                  >
                    <IconButton sx={{ color: '#743ae9' }}>
                      <PlayCircleFilledWhiteIcon
                        fontSize={isMobile ? 'medium' : 'large'}
                      />
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                      <FavoriteBorderIcon
                        fontSize={isMobile ? 'small' : 'medium'}
                      />
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                      <MoreHorizIcon fontSize={isMobile ? 'small' : 'medium'} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  fontSize: '14px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  mt: 1,
                }}
              >
                {item.title2}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
