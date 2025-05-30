<template>
  <div class="view-container">
    <h1>Foro de Discusión</h1>
    <section class="code-section">
      <div class="post-form">
        <h2>Publicar un nuevo comentario</h2>
        <textarea v-model="newCommentText" placeholder="Escribe tu comentario aquí..." rows="4"></textarea>
        <input type="file" @change="handleImageUpload" accept="image/*">
        <button @click="addComment">Publicar</button>
      </div>

      <div class="comments-list">
        <h2>Comentarios</h2>
        <div v-if="comments.length === 0" class="no-comments">
          No hay comentarios aún. ¡Sé el primero en publicar!
        </div>
        <div v-for="(comment, index) in comments" :key="index" class="comment-item">
          <p class="comment-text">{{ comment.text }}</p>
          <img v-if="comment.imageUrl" :src="comment.imageUrl" alt="Imagen adjunta" class="comment-image">
          <span class="comment-date">{{ comment.date }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Comment {
  _id?: string; // MongoDB ID
  text: string;
  imageUrl: string | null; // Cambiado de 'image' a 'imageUrl'
  date: string;
}

export default defineComponent({
  name: 'ForoView',
  setup() {
    const newCommentText = ref('');
    const newCommentFile = ref<File | null>(null); // Para el archivo de imagen
    const comments = ref<Comment[]>([]);

    const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3000';
    const API_COMMENTS_URL = `${API_BASE_URL}/api/comments`;

    const handleImageUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        newCommentFile.value = input.files[0];
      } else {
        newCommentFile.value = null;
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(API_COMMENTS_URL);
        comments.value = response.data.map((comment: any) => ({
          ...comment,
          date: new Date(comment.date).toLocaleString(), // Formatear la fecha
          imageUrl: comment.imageUrl || null // La URL ya viene completa de Cloudinary
        }));
      } catch (error) {
        console.error('Error al obtener comentarios:', error);
      }
    };

    const addComment = async () => {
      if (!newCommentText.value.trim() && !newCommentFile.value) {
        alert('Por favor, escribe un comentario o sube una imagen.');
        return;
      }

      const formData = new FormData();
      formData.append('text', newCommentText.value.trim());
      if (newCommentFile.value) {
        formData.append('image', newCommentFile.value);
      }

      try {
        const response = await axios.post(API_COMMENTS_URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // Añadir el nuevo comentario al principio de la lista
        const newComment = {
          ...response.data,
          date: new Date(response.data.date).toLocaleString(),
          imageUrl: response.data.imageUrl || null
        };
        comments.value.unshift(newComment);

        newCommentText.value = '';
        newCommentFile.value = null;
        // Limpiar el input de tipo file
        const fileInput = document.querySelector('.post-form input[type="file"]') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      } catch (error) {
        console.error('Error al publicar comentario:', error);
        alert('Hubo un error al publicar el comentario.');
      }
    };

    onMounted(() => {
      fetchComments();
    });

    return {
      newCommentText,
      newCommentFile,
      comments,
      handleImageUpload,
      addComment,
    };
  },
});
</script>

<style scoped>
.post-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.post-form textarea {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
}

.post-form input[type="file"] {
  margin-bottom: 15px;
  display: block;
}

.post-form button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.post-form button:hover {
  background-color: #369f6e;
}

.comments-list {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.no-comments {
  text-align: center;
  color: #777;
  padding: 20px;
  border: 1px dashed #eee;
  border-radius: 4px;
  margin-top: 20px;
}

.comment-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.comment-item:last-child {
  border-bottom: none;
}

.comment-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 10px;
  white-space: pre-wrap; /* Para mantener saltos de línea del textarea */
}

.comment-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
  display: block; /* Asegura que la imagen ocupe su propia línea */
}

.comment-date {
  font-size: 0.85rem;
  color: #999;
  display: block;
  margin-top: 5px;
}
</style>
