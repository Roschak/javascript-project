import express from 'express';
import { nanoid } from 'nanoid';
import notes from './notes.js';

const router = express.Router();

// KRITERIA 1: Menyimpan Catatan
router.post('/notes', (req, res) => {
  const { title, tags, body } = req.body;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  // Cek apakah berhasil masuk ke array
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
  }

  res.status(500).json({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
});

export default router;