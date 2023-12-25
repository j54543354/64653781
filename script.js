function adjustText() {
  document.getElementById('student-id').style.fontSize = '20px';
  document.getElementById('student-id').style.color = 'blue';

  document.getElementById('student-name').style.fontSize = '20px';
  document.getElementById('student-name').style.color = 'green';
}

function adjustPicture() {
  document.getElementById('profile-picture').style.border = '4px solid red';
  document.getElementById('profile-picture').style.borderRadius = '50%';
}

function changePicture() {
  document.getElementById('profile-picture').src = 'IMG_2087.GIF';
}
