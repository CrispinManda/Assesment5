import express from 'express';
// import { requestLogger } from './middlewares/logger';
import noteRoutes from './routes/note.outes';

const app = express();

// app.use(requestLogger);

app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
