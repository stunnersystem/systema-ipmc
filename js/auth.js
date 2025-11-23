// js/auth.js
import { supabase } from './supabase.js';

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;

  // Buscar papel do usuário
  const {  profile, error: profileError } = await supabase
    .from('usuarios')
    .select('role')
    .eq('auth_id', data.user.id)
    .single();

  if (profileError || !profile) {
    await supabase.auth.signOut();
    throw new Error('Perfil não encontrado. Contacte o administrador.');
  }

  localStorage.setItem('ipm_user_auth_token', data.session.access_token);
  localStorage.setItem('ipm_user_role', profile.role);
  localStorage.setItem('ipm_user_id', data.user.id);

  return { papel: profile.role, usuario: data.user };
}

export async function logout() {
  await supabase.auth.signOut();
  localStorage.removeItem('ipm_user_auth_token');
  localStorage.removeItem('ipm_user_role');
  localStorage.removeItem('ipm_user_id');
  window.location.href = '../index.html';
}

export async function getUserRole() {
  return localStorage.getItem('ipm_user_role');
}

export async function getUserSession() {
  return await supabase.auth.getSession();
}
