import { nanoid } from 'nanoid';
import notes from './notes.js';

// Kriteria 1: Menyimpan Catatan (POST)
export const createNote = (req, res) => {
  const { title = 'untitled', tags, body } = req.body;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    id, title, createdAt, updatedAt, tags, body,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    return res.status(201).json({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: { noteId: id },
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
};

// Kriteria 2: Menampilkan Seluruh Catatan (GET)
export const getNotes = (req, res) => {
  return res.json({
    status: 'success',
    data: { notes },
  });
};

// Kriteria 2 (Tambahan): Menampilkan Detail Catatan (GET by ID)
export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((n) => n.id === id);

  if (note) {
    return res.json({
      status: 'success',
      data: { note },
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
};

// Kriteria 3: Mengubah Catatan (PUT)
export const editNoteById = (req, res) => {
  const { id } = req.params;
  const { title, tags, body } = req.body;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((n) => n.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    return res.json({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
};

// Kriteria 4: Menghapus Catatan (DELETE)
export const deleteNoteById = (req, res) => {
  const { id } = req.params;
  const index = notes.findIndex((n) => n.id === id);
  
  if (index !== -1) {
    notes.splice(index, 1);
    return res.json({
      status: 'success',
      message: 'Catatan berhasil dihapus',
    });
  } // Perbaikan: Menghapus titik koma berlebih di sini

  return res.status(404).json({
    status: 'fail',
    message: 'Catatan gagal dihapus. Id tidak ditemukan',
  });
}; // Perbaikan: Memastikan file diakhiri dengan benar tanpa karakter sisa