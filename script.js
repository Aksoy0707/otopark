import { supabase } from './supabaseClient.js';

// Giriş fonksiyonu
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert("Giriş başarısız: " + error.message);
  } else {
    alert("Giriş başarılı!");
    console.log("Kullanıcı bilgisi:", data.user);
    // Giriş başarılı olunca ana sayfaya yönlendir
    window.location.href = "/ana-sayfa.html";
  }
}

// Form gönderildiğinde tetiklenecek olay
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password);
});