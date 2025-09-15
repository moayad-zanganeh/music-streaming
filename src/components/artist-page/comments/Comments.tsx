import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Stack,
  Paper,
} from '@mui/material';
import { Send, Mic, ThumbUp, ChatBubble } from '@mui/icons-material';

interface Reply {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
}

interface Comment {
  id: number;
  name: string;
  avatar: string;
  time: string;
  message: string;
  likes: number;
  replies: Reply[];
}

// داده‌های Mock برای زمانی که سرور در دسترس نیست
const mockComments: Comment[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/avatars/john.jpg',
    time: '2 hours ago',
    message: 'This is an amazing track! Love the beats.',
    likes: 5,
    replies: [
      {
        id: 101,
        name: 'Jane Smith',
        avatar: '/avatars/jane.jpg',
        time: '1 hour ago',
        message: 'I totally agree! The production is fantastic.',
      },
    ],
  },
  {
    id: 2,
    name: 'Alex Johnson',
    avatar: '/avatars/alex.jpg',
    time: '3 hours ago',
    message: 'The lyrics are so meaningful. Great job!',
    likes: 3,
    replies: [],
  },
];

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const checkServerStatus = async () => {
    try {
      // تست اتصال به سرور
      await fetch('http://localhost:3001/comments', {
        method: 'HEAD',
        mode: 'no-cors',
      });
      setIsOnline(true);
    } catch (error) {
      setIsOnline(false);
      setComments(mockComments);
    }
  };

  const fetchComments = async () => {
    if (!isOnline) {
      setComments(mockComments);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/comments');
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Failed to fetch comments, using mock data:', error);
      setIsOnline(false);
      setComments(mockComments);
    }
  };

  useEffect(() => {
    checkServerStatus();
    fetchComments();
  }, []);

  const handleLike = async (comment: Comment) => {
    const likedKey = `liked_${comment.id}`;
    if (localStorage.getItem(likedKey)) return;
    localStorage.setItem(likedKey, 'true');

    const updatedComment = { ...comment, likes: comment.likes + 1 };

    if (isOnline) {
      try {
        await fetch(`http://localhost:3001/comments/${comment.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedComment),
        });
      } catch (error) {
        console.error('Failed to update like:', error);
      }
    }

    // به‌روزرسانی local state در هر صورت
    setComments((prev) =>
      prev.map((c) => (c.id === comment.id ? updatedComment : c))
    );
  };

  const handleReplySend = async (comment: Comment) => {
    if (replyText.trim() === '') return;

    const newReply: Reply = {
      id: Date.now(),
      name: 'You',
      avatar: '/avatars/you.jpg',
      time: 'Just now',
      message: replyText,
    };

    const updatedComment = {
      ...comment,
      replies: [...comment.replies, newReply],
    };

    if (isOnline) {
      try {
        await fetch(`http://localhost:3001/comments/${comment.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedComment),
        });
      } catch (error) {
        console.error('Failed to send reply:', error);
      }
    }

    // به‌روزرسانی local state
    setComments((prev) =>
      prev.map((c) => (c.id === comment.id ? updatedComment : c))
    );
    setReplyText('');
    setReplyingTo(null);
  };

  const handleSend = async () => {
    if (newComment.trim() === '') return;

    const newCommentData: Comment = {
      id: Date.now(),
      name: 'You',
      avatar: '/avatars/you.jpg',
      time: 'Just now',
      message: newComment,
      likes: 0,
      replies: [],
    };

    if (isOnline) {
      try {
        await fetch('http://localhost:3001/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCommentData),
        });
      } catch (error) {
        console.error('Failed to send comment:', error);
      }
    }

    // به‌روزرسانی local state
    setComments((prev) => [...prev, newCommentData]);
    setNewComment('');
  };

  const handleVoice = () => {
    alert('Voice recording not implemented.');
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', px: 2, py: 3 }}>
      <Typography variant="h6" mb={2}>
        Comments ({comments.length})
        {!isOnline && (
          <Typography variant="caption" color="warning.main" ml={1}>
            (Offline Mode)
          </Typography>
        )}
      </Typography>

      <Stack spacing={2}>
        {comments.map((comment) => (
          <Paper
            key={comment.id}
            sx={{ p: 2, bgcolor: 'inherit', boxShadow: 'none' }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ bgcolor: 'inherit', boxShadow: 'none' }}
            >
              <Avatar src={comment.avatar} alt={comment.name} />
              <Box flex={1}>
                <Typography fontWeight={600}>{comment.name}</Typography>
                <Typography variant="caption" color="gray">
                  {comment.time}
                </Typography>
                <Typography mt={1}>{comment.message}</Typography>
                <Box mt={1} display="flex" gap={1}>
                  <IconButton size="small" onClick={() => handleLike(comment)}>
                    <ThumbUp fontSize="small" sx={{ color: 'gray' }} />
                  </IconButton>
                  <Typography variant="body2">{comment.likes}</Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      setReplyingTo(
                        replyingTo === comment.id ? null : comment.id
                      )
                    }
                  >
                    <ChatBubble fontSize="small" sx={{ color: 'gray' }} />
                  </IconButton>
                  <Typography variant="body2">
                    {comment.replies.length}
                  </Typography>
                </Box>
                {replyingTo === comment.id && (
                  <Box mt={2} display="flex" gap={1}>
                    <TextField
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a reply..."
                      fullWidth
                      size="small"
                      sx={{
                        bgcolor: '#1e1e1e',
                        borderRadius: 2,
                        input: { color: '#fff' },
                      }}
                    />
                    <IconButton onClick={() => handleReplySend(comment)}>
                      <Send sx={{ color: '#aaa' }} />
                    </IconButton>
                  </Box>
                )}
                {comment.replies.length > 0 && (
                  <Stack mt={2} spacing={1}>
                    {comment.replies.map((reply) => (
                      <Box key={reply.id} display="flex" gap={1} pl={4}>
                        <Avatar
                          src={reply.avatar}
                          alt={reply.name}
                          sx={{ width: 28, height: 28 }}
                        />
                        <Box>
                          <Typography fontWeight={500}>{reply.name}</Typography>
                          <Typography variant="caption" color="gray">
                            {reply.time}
                          </Typography>
                          <Typography>{reply.message}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Box display="flex" alignItems="center" gap={1}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Add comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          fullWidth
          sx={{
            bgcolor: '#1e1e1e',
            borderRadius: 2,
            input: { color: '#fff' },
          }}
        />
        <IconButton onClick={handleVoice}>
          <Mic sx={{ color: '#aaa' }} />
        </IconButton>
        <IconButton onClick={handleSend}>
          <Send sx={{ color: '#aaa' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CommentSection;
