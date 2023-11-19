const logoutFunction = async () => {
  alert("logging out")
  await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/login');
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button.logout-btn').forEach(btn => 
      btn.addEventListener('click', logoutFunction)
    );
  },
  false
);