<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
  window.addDoc = addDoc;
  window.collection = collection;
  window.getDocs = getDocs;
  window.query = query;
  window.orderBy = orderBy;



async function salvarComentario() {
  const nome = document.getElementById("nome").value;
  const comentario = document.getElementById("comentario").value;
  const nota = document.getElementById("nota").value;

  if (!nome || !comentario) {
    alert("Preencha todos os campos!");
    return;
  }

  await addDoc(collection(db, "comentarios"), {
    nome,
    comentario,
    nota: Number(nota),
    data: new Date()
  });

  alert("Comentário enviado!");
  carregarComentarios();
}






</script>
