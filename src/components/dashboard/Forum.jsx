import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const Forum = () => {
  const [threads, setThreads] = useState([
    { id: 1, title: "How to stay motivated while learning?", author: "Alice" },
    { id: 2, title: "Best resources for React beginners?", author: "John" },
  ]);

  const [newThread, setNewThread] = useState("");

  const handleAddThread = () => {
    if (!newThread.trim()) return;
    const newEntry = {
      id: Date.now(),
      title: newThread,
      author: "Anonymous",
    };
    setThreads([newEntry, ...threads]);
    setNewThread("");
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4 text-center">Community Forum</h2>
      <Card className="shadow-sm border-0 rounded-3 p-4 mb-4">
        <Form>
          <Form.Group>
            <Form.Label className="fw-semibold">Start a New Discussion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your topic..."
              value={newThread}
              onChange={(e) => setNewThread(e.target.value)}
            />
          </Form.Group>
          <Button 
            variant="primary" 
            className="mt-3 w-100"
            onClick={handleAddThread}
          >
            Post Thread
          </Button>
        </Form>
      </Card>
      {threads.map((thread) => (
        <Card 
          key={thread.id} 
          className="shadow-sm border-0 rounded-3 mb-3 p-3 forum-thread"
          style={{ background: "linear-gradient(135deg, #fdfbfb, #ebedee)" }}
        >
          <h5 className="fw-bold">{thread.title}</h5>
          <small className="text-muted">Posted by {thread.author}</small>
          <Button 
            variant="outline-primary" 
            size="sm" 
            className="mt-2"
          >
            View Discussion
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default Forum;
