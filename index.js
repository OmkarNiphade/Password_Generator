function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');
        }

        function generatePassword() {
            const includeUppercase = document.getElementById('include-uppercase').checked;
            const includeLowercase = document.getElementById('include-lowercase').checked;
            const includeNumbers = document.getElementById('include-numbers').checked;
            const includeSymbols = document.getElementById('include-symbols').checked;
            const length = parseInt(document.getElementById('password-length').value, 10);

            if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
                alert('Please select at least one character type.');
                return;
            }

            if (length < 1) {
                alert('Password length must be at least 1.');
                return;
            }

            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const numberChars = '0123456789';
            const symbolChars = '!@#$%^&*()-_=+\\/~?';
            let characterPool = '';

            if (includeUppercase) characterPool += uppercaseChars;
            if (includeLowercase) characterPool += lowercaseChars;
            if (includeNumbers) characterPool += numberChars;
            if (includeSymbols) characterPool += symbolChars;

            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characterPool.length);
                password += characterPool[randomIndex];
            }

            document.getElementById('generated-password').textContent = `Generated Password: ${password}`;
        }

        function checkPasswordStrength() {
            const password = document.getElementById('password-input').value;

            if (!password) {
                alert('Please enter a password.');
                return;
            }

            let strengthScore = 0;

            // Criteria for password strength
            if (password.length >= 8) strengthScore++; // Length of at least 8
            if (/[A-Z]/.test(password)) strengthScore++; // Contains uppercase letters
            if (/[a-z]/.test(password)) strengthScore++; // Contains lowercase letters
            if (/[0-9]/.test(password)) strengthScore++; // Contains numbers
            if (/[!@#$%^&*()\-_=+\\/~?]/.test(password)) strengthScore++; // Contains symbols

            // Determine password strength based on score
            let strength = '';
            if (strengthScore <= 2) {
                strength = 'Weak';
            } else if (strengthScore === 3 || strengthScore === 4) {
                strength = 'Medium';
            } else if (strengthScore === 5) {
                strength = 'Strong';
            }

            document.getElementById('password-strength').textContent = `Password Strength: ${strength}`;
        }