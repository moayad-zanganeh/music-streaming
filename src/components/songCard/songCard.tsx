import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface Props {
  title: string;
  artist: string;
  image: string;
}

export default function SongCard({ title, artist, image }: Props) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
}
