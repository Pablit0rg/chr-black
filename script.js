document.addEventListener('DOMContentLoaded', () => {

    // --- TRADUÇÕES ---
    const translations = {
        'pt-BR': {
            login_title: 'Bem-vindo(a) de volta!',
            login_subtitle: 'Feito em Curitiba para todo o Brasil.',
            email_label: 'E-mail / Usuário',
            email_placeholder: 'seu@email.com',
            password_label: 'Senha',
            forgot_password: 'Esqueceu a senha?',
            login_button: 'Entrar',
            or_with: 'ou entre com',
            login_phone: 'Entrar com Celular',
            recaptcha_note_part1: 'Este site é protegido por reCAPTCHA. Aplicam-se a',
            privacy_policy: 'Política de Privacidade',
            recaptcha_note_part2: 'e os',
            terms_of_service: 'Termos do Serviço',
            recaptcha_note_part3: 'da Google.',
            no_account_yet_link: 'Ainda não tem uma conta? Crie seu perfil agora mesmo.',
            register_title: 'Crie sua Conta',
            register_subtitle: 'Rápido, fácil e seguro.',
            full_name_label: 'Nome completo',
            full_name_placeholder: 'Seu nome completo',
            email_label_reg: 'E-mail',
            password_label_reg: 'Senha',
            create_password_placeholder: 'Crie uma senha forte',
            password_reqs_title: 'A senha deve conter:',
            password_req_length: 'Pelo menos 8 caracteres',
            password_req_uppercase: 'Uma letra maiúscula (A-Z)',
            password_req_number: 'Um número (0-9)',
            password_req_symbol: 'Um símbolo (!, @, #, ...)',
            confirm_password_label: 'Confirmar senha',
            confirm_password_placeholder: 'Repita a senha',
            register_button: 'Cadastrar',
            already_have_account: 'Já possui uma conta?',
            login_link: 'Faça o login.',
            credits_text: 'Criado e desenvolvido por',
            footer_disclaimer: 'Produto fictício sem fins lucrativos.',
            footer_copyright: '© 2025 Todos os direitos reservados.',
            cookie_text_uber_compact: 'Utilizamos cookies para personalizar sua experiência, exibir anúncios e medir a eficácia. Personalize suas preferências em <a href="#" id="cookie-settings-link" class="font-bold hover:underline">Configurações de cookies</a> ou clique em "Rejeitar" se não desejar. Saiba mais em nosso <a href="#" id="cookie-notice-link" class="font-bold hover:underline">Aviso de cookies</a>.',
            cookie_reject_btn: 'Rejeitar',
            cookie_accept_btn: 'Aceitar',
            error_invalid_email: 'E-mail inválido. Use um formato como seu@email.com.',
            error_invalid_domain: 'O domínio do e-mail parece inválido. Verifique a digitação.',
            error_email_first: 'Por favor, preencha o e-mail primeiro.',
            error_all_fields_required: 'Todos os campos são obrigatórios para acessar.',
            phone_login_title: 'Entrar com seu celular',
            phone_login_subtitle: 'Enviaremos um código de uso único via SMS.',
            phone_label: 'Número de celular',
            phone_placeholder: '(XX) XXXXX-XXXX',
            send_sms_button: 'Enviar SMS',
            back_to_login: 'Voltar para o login.',
            forgot_password_title: 'Recuperar Senha',
            forgot_password_subtitle: 'Insira seu e-mail para receber o link de recuperação.',
            send_recovery_link: 'Enviar Link de Recuperação',
            privacy_modal_title: 'Política de Privacidade',
            privacy_modal_p1: 'Sua privacidade é importante para nós. É política do TechStore Curitiba respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site TechStore Curitiba, e outros sites que possuímos e operamos.',
            privacy_modal_p2: 'Trabalhamos com base na Lei Geral de Proteção de Dados (LGPD) e buscamos seguir as melhores práticas de segurança, como as <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">diretrizes de privacidade do Google</a>. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, fazendo-o por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.',
            privacy_modal_p3: 'Você tem o direito de saber quais dados mantemos sobre você e de solicitar a correção ou exclusão desses dados. Nossos serviços estão em conformidade com o <a href="http://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target="_blank" rel="noopener noreferrer">Código de Defesa do Consumidor</a> e com as normas de <a href="https://www.gov.br/defesa/pt-br/assuntos/seguranca-cibernetica" target="_blank" rel="noopener noreferrer">Segurança Cibernética Nacional</a>.',
            terms_modal_title: 'Termos do Serviço',
            terms_modal_p1: 'Ao acessar ao site TechStore Curitiba, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.',
            terms_modal_p2: 'É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TechStore Curitiba, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); tentar descompilar ou fazer engenharia reversa de qualquer software contido no site TechStore Curitiba.',
            cookie_settings_title: 'Configurações de Cookies',
            cookie_settings_p1: 'Gerencie suas preferências de cookies. Você pode aceitar ou rejeitar categorias de cookies não essenciais. Os cookies estritamente necessários não podem ser rejeitados, pois são essenciais para fornecer os serviços solicitados.',
            cookie_settings_p2: 'Estes cookies são necessários para o funcionamento do site e não podem ser desativados. Eles são definidos em resposta a ações feitas por você, como definir suas preferências de privacidade, fazer login ou preencher formulários.',
            cookie_settings_p3: 'Esses cookies nos permitem contar visitas e fontes de tráfego, para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e a ver como os visitantes se movem pelo site.',
            cookie_notice_title: 'Aviso de Cookies',
            cookie_notice_p1: 'Este site usa cookies para melhorar a experiência do usuário, personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar nosso tráfGico. Cookies são pequenos arquivos de texto que podem ser usados por sites para tornar a experiência de um usuário mais eficiente.',
            cookie_notice_p2: 'A lei afirma que podemos armazenar cookies em seu dispositivo se eles forem estritamente necessários para a operação deste site. Para todos os outros tipos de cookies, precisamos da sua permissão. Ao continuar a navegar, você concorda com o uso de cookies. Para mais detalhes, consulte nossa <a href="#" id="privacy-link-from-cookie-notice">Política de Privacidade</a>.',
            error_invalid_phone: 'O número de telefone é inválido. Verifique o DDD.',
        },
        'en-US': { /* ... (traduções em inglês) ... */ },
        'es-ES': { /* ... (traduções em espanhol) ... */ }
    };
    // (O resto das suas traduções 'en-US' e 'es-ES' iria aqui)

    // --- ELEMENTOS DO DOM (Formulários) ---
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const phoneSection = document.getElementById('phone-section');
    const forgotPasswordSection = document.getElementById('forgot-password-section');
    const showRegisterFromLogin = document.getElementById('show-register-from-login');
    const showLoginFromRegister = document.getElementById('show-login-from-register');
    const showPhoneLoginBtn = document.getElementById('show-phone-login');
    const showLoginFromPhoneLink = document.getElementById('show-login-from-phone');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const showLoginFromForgotLink = document.getElementById('show-login-from-forgot');
    const allSections = [loginSection, registerSection, phoneSection, forgotPasswordSection];
    const loginForm = document.getElementById('login-form');
    const loginEmailInput = document.getElementById('login-email');
    const loginPasswordInput = document.getElementById('login-password');
    const emailError = document.getElementById('email-error');
    const domainError = document.getElementById('domain-error');
    const emailFirstError = document.getElementById('email-first-error');
    const registerForm = document.getElementById('register-form');
    const phoneForm = document.getElementById('phone-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const phoneError = document.getElementById('phone-error');
    const registerError = document.getElementById('register-error');
    const regPasswordInput = document.getElementById('reg-password');
    const passwordCriteria = document.getElementById('password-criteria');
    const critTitle = document.getElementById('crit-title');
    const critLength = document.getElementById('crit-length');
    const critUppercase = document.getElementById('crit-uppercase');
    const critNumber = document.getElementById('crit-number');
    const critSymbol = document.getElementById('crit-symbol');

    // --- ELEMENTOS DO DOM (Cookies e Modais) ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');
    const langSelectorBtn = document.getElementById('language-selector-btn');
    const langSelectorList = document.getElementById('language-selector-list');
    const currentLangSpan = document.getElementById('current-language');
    const privacyModal = document.getElementById('privacy-policy-modal');
    const termsModal = document.getElementById('terms-of-service-modal');
    const cookieSettingsModal = document.getElementById('cookie-settings-modal');
    const cookieNoticeModal = document.getElementById('cookie-notice-modal');
    const closePrivacyModalBtn = document.getElementById('close-privacy-modal');
    const closeTermsModalBtn = document.getElementById('close-terms-modal');
    const closeCookieSettingsModalBtn = document.getElementById('close-cookie-settings-modal');
    const closeCookieNoticeModalBtn = document.getElementById('close-cookie-notice-modal');
    const privacyLinkFromCookieNotice = document.getElementById('privacy-link-from-cookie-notice');

    // --- LÓGICA DE TRADUÇÃO ---
    const changeLanguage = (lang) => {
        const translationSet = translations[lang] || translations['pt-BR'];
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            let translation = translationSet[key];
            if(key === 'credits_text' && el.parentElement.id === 'credits-text-wrapper') {
                el.parentElement.childNodes[0].nodeValue = translation + " ";
                return;
            }
            if (translation) {
                if (el.tagName === 'INPUT' && el.placeholder) {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        if (langSelectorList) {
            const selectedLangElement = langSelectorList.querySelector(`[data-lang="${lang}"]`);
            if (selectedLangElement && currentLangSpan) {
                currentLangSpan.textContent = selectedLangElement.textContent;
            }
            langSelectorList.classList.add('hidden');
        }
        document.documentElement.lang = lang.split('-')[0];
    };

    // --- LÓGICA DO SELETOR DE IDIOMA ---
    if (langSelectorBtn && langSelectorList) {
        langSelectorBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelectorList.classList.toggle('hidden');
        });
        langSelectorList.addEventListener('click', (e) => {
            if(e.target.tagName === 'A' && e.target.dataset.lang) {
                e.preventDefault();
                const lang = e.target.dataset.lang;
                changeLanguage(lang);
            }
        });
        document.addEventListener('click', (e) => {
            if (!langSelectorBtn.contains(e.target) && !langSelectorList.contains(e.target)) {
                langSelectorList.classList.add('hidden');
            }
        });
    }

    // --- LÓGICA PARA ALTERNAR VISIBILIDADE DA SENHA ---
    const setupPasswordToggle = (toggleId, inputId, eyeOnId, eyeOffId) => {
        const toggleElement = document.getElementById(toggleId);
        const inputElement = document.getElementById(inputId);
        const eyeOn = document.getElementById(eyeOnId);
        const eyeOff = document.getElementById(eyeOffId);
        if (toggleElement && inputElement && eyeOn && eyeOff) {
            toggleElement.addEventListener('click', () => {
                if (inputElement.type === 'password') {
                    inputElement.type = 'text';
                    eyeOn.classList.add('hidden');
                    eyeOff.classList.remove('hidden');
                } else {
                    inputElement.type = 'password';
                    eyeOff.classList.add('hidden');
                    eyeOn.classList.remove('hidden');
                }
            });
        }
    };
    setupPasswordToggle('toggle-login-password', 'login-password', 'eye-login-on', 'eye-login-off');
    setupPasswordToggle('toggle-reg-password', 'reg-password', 'eye-reg-on', 'eye-reg-off');
    setupPasswordToggle('toggle-reg-confirm-password', 'reg-confirm-password', 'eye-reg-confirm-on', 'eye-reg-confirm-off');

    // --- FUNÇÃO PARA ALTERNAR ENTRE OS FORMULÁRIOS ---
    const showSection = (sectionToShow) => {
        allSections.forEach(section => {
            if (section && section !== sectionToShow) {
                section.classList.remove('form-visible');
                section.classList.add('form-hidden');
            }
        });
        if(sectionToShow){
            sectionToShow.classList.remove('form-hidden');
            sectionToShow.classList.add('form-visible');
        }
    };
    if (showRegisterFromLogin) {
        showRegisterFromLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(registerSection);
        });
    }
    if (showLoginFromRegister) {
        showLoginFromRegister.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(loginSection);
        });
    }
    if(showPhoneLoginBtn) showPhoneLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(phoneSection);
    });
    if(showLoginFromPhoneLink) showLoginFromPhoneLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });
    if(forgotPasswordLink) forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(forgotPasswordSection);
    });
    if(showLoginFromForgotLink) showLoginFromForgotLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    // --- LÓGICA DOS MODAIS ---
    const openModal = (modal) => { if(modal) modal.classList.add('visible'); }
    const closeModal = (modal) => { if(modal) modal.classList.remove('visible'); }
    document.addEventListener('click', (e) => {
        if(e.target.closest('#privacy-policy-link')) { e.preventDefault(); openModal(privacyModal); }
        if(e.target.closest('#terms-of-service-link')) { e.preventDefault(); openModal(termsModal); }
        if(e.target.closest('#cookie-settings-link')) { e.preventDefault(); openModal(cookieSettingsModal); }
        if(e.target.closest('#cookie-notice-link')) { e.preventDefault(); openModal(cookieNoticeModal); }
    });
    if(closePrivacyModalBtn) closePrivacyModalBtn.addEventListener('click', () => closeModal(privacyModal));
    if(closeTermsModalBtn) closeTermsModalBtn.addEventListener('click', () => closeModal(termsModal));
    if(closeCookieSettingsModalBtn) closeCookieSettingsModalBtn.addEventListener('click', () => closeModal(cookieSettingsModal));
    if(closeCookieNoticeModalBtn) closeCookieNoticeModalBtn.addEventListener('click', () => closeModal(cookieNoticeModal));
    if(privacyModal) privacyModal.addEventListener('click', (e) => { if (e.target === privacyModal) closeModal(privacyModal); });
    if(termsModal) termsModal.addEventListener('click', (e) => { if (e.target === termsModal) closeModal(termsModal); });
    if(cookieSettingsModal) cookieSettingsModal.addEventListener('click', (e) => { if (e.target === cookieSettingsModal) closeModal(cookieSettingsModal); });
    if(cookieNoticeModal) cookieNoticeModal.addEventListener('click', (e) => { if (e.target === cookieNoticeModal) closeModal(cookieNoticeModal); });
    if(privacyLinkFromCookieNotice) privacyLinkFromCookieNotice.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(cookieNoticeModal);
        openModal(privacyModal);
    });

    // --- AÇÕES DE FORMULÁRIOS ---
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(loginEmailInput.value && loginPasswordInput.value) {
                console.log('Login efetuado com sucesso! (Simulação)');
                alert('Login realizado com sucesso! (Simulação)');
            }
        });
    }
    if(registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = Array.from(registerForm.querySelectorAll('input'));
            const allFieldsFilled = inputs.every(input => input.value.trim() !== '');
            if (!allFieldsFilled) {
                if(registerError) registerError.classList.add('visible');
            } else {
                if(registerError) registerError.classList.remove('visible');
                console.log('Cadastro efetuado com sucesso! (Simulação)');
                alert('Cadastro realizado com sucesso! (Simulação)');
                showSection(loginSection);
            }
        });
    }
    if(phoneForm) {
        phoneForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneInput = document.getElementById('phone-number');
            const phoneValue = phoneInput.value.replace(/\D/g, '');
            const ddd = phoneValue.substring(0, 2);
            const validDDDs = [
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24',
                '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43',
                '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62',
                '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77',
                '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92',
                '93', '94', '95', '96', '97', '98', '99'
            ];
            if(phoneValue.length === 11 && phoneValue.startsWith(ddd) && validDDDs.includes(ddd)) {
                if(phoneError) phoneError.classList.remove('visible');
                console.log(`Código SMS enviado para ${phoneInput.value}! (Simulação)`);
                alert(`Código SMS enviado para ${phoneInput.value}! (Simulação)`);
            } else {
                if(phoneError) phoneError.classList.add('visible');
            }
        });
    }
    if(forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recoveryEmail = document.getElementById('recovery-email');
            if(recoveryEmail.value) {
                console.log(`Link de recuperação enviado para ${recoveryEmail.value}! (Simulação)`);
                alert(`Link de recuperação enviado para ${recoveryEmail.value}! (Simulação)`);
                showSection(loginSection);
            }
        });
    }

    // --- Links Vazios ---
    document.querySelectorAll('a[href="#"]').forEach(link => {
        const idsToIgnore = ['show-register-from-login', 'show-login-from-register', 'show-phone-login', 'show-login-from-phone', 'forgot-password-link', 'show-login-from-forgot', 'privacy-policy-link', 'terms-of-service-link', 'cookie-settings-link', 'cookie-notice-link', 'privacy-link-from-cookie-notice'];
        if(!idsToIgnore.includes(link.id) && !link.dataset.lang) {
            link.addEventListener('click', e => e.preventDefault());
        }
    });

    // --- LÓGICA DO BANNER DE COOKIES ---
    const hideCookieBanner = () => {
        if (cookieBanner) {
            cookieBanner.classList.add('hidden');
        }
    };
    if (acceptCookiesBtn) acceptCookiesBtn.addEventListener('click', hideCookieBanner);
    if (rejectCookiesBtn) rejectCookiesBtn.addEventListener('click', hideCookieBanner);

    // --- VALIDAÇÕES DO FORMULÁRIO DE LOGIN ---
    if (loginPasswordInput) {
        loginPasswordInput.addEventListener('focus', () => {
            if (loginEmailInput && loginEmailInput.value.trim() === '') {
                if(emailFirstError) emailFirstError.classList.add('visible');
                if(loginEmailInput) loginEmailInput.classList.add('input-error');
            }
        });
    }
    if (loginEmailInput) {
        loginEmailInput.addEventListener('input', () => {
            if(emailFirstError) emailFirstError.classList.remove('visible');
            if(emailError) emailError.classList.remove('visible');
            if(domainError) domainError.classList.remove('visible');
            loginEmailInput.classList.remove('input-error');
        });
        loginEmailInput.addEventListener('blur', () => {
            const email = loginEmailInput.value.trim();
            if (email === '') return;
            const validDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'uol.com.br', 'bol.com.br', 'terra.com.br', 'live.com', 'msn.com'];
            const parts = email.split('@');
            if (parts.length !== 2 || parts[1].trim() === '') {
                if(emailError) emailError.classList.add('visible');
                loginEmailInput.classList.add('input-error');
                return;
            }
            if (!validDomains.includes(parts[1].toLowerCase())) {
                if(domainError) domainError.classList.add('visible');
                loginEmailInput.classList.add('input-error');
            }
        });
    }

    // --- VALIDAÇÕES DO FORMULÁRIO DE CADASTRO (TOOLTIP INTERATIVO) ---
    if (regPasswordInput) {
        regPasswordInput.addEventListener('focus', () => {
            if(passwordCriteria) passwordCriteria.classList.remove('hidden');
        });
        regPasswordInput.addEventListener('blur', () => {
            if(passwordCriteria) passwordCriteria.classList.add('hidden');
        });
        regPasswordInput.addEventListener('input', () => {
            const value = regPasswordInput.value;
            let checks = {
                length: value.length >= 8,
                uppercase: /[A-Z]/.test(value),
                number: /[0-9]/.test(value),
                symbol: /[!@#$%^&*(),.?":{}|<>]/.test(value)
            };
            if(critLength) {
                critLength.classList.toggle('crit-valid', checks.length);
                critLength.classList.toggle('crit-invalid', !checks.length);
            }
            if(critUppercase) {
                critUppercase.classList.toggle('crit-valid', checks.uppercase);
                critUppercase.classList.toggle('crit-invalid', !checks.uppercase);
            }
            if(critNumber) {
                critNumber.classList.toggle('crit-valid', checks.number);
                critNumber.classList.toggle('crit-invalid', !checks.number);
            }
            if(critSymbol) {
                critSymbol.classList.toggle('crit-valid', checks.symbol);
                critSymbol.classList.toggle('crit-invalid', !checks.symbol);
            }
            const allValid = Object.values(checks).every(Boolean);
            if(passwordCriteria) passwordCriteria.classList.toggle('all-valid', allValid);
            if(critTitle){
                critTitle.classList.toggle('crit-invalid', !allValid);
                critTitle.classList.toggle('crit-valid', allValid);
            }
        });
    }

    // Inicia a página no idioma padrão
    changeLanguage('pt-BR');


    // =================================================================
    // === LÓGICA DA GALERIA (SCROLL INFINITO) ===
    // =================================================================

    const galleryGrid = document.getElementById('gallery-grid');
    const galleryLoader = document.getElementById('gallery-loader');

    // Só executa esta lógica se estivermos na página da galeria
    if (galleryGrid && galleryLoader) {

        let isLoading = false;
        let photosLoaded = 0;
        const totalPhotos = 1000;
        const photosPerBatch = 9;

        const createPhotoCard = () => {
            const cardLink = document.createElement('a');
            cardLink.href = "#";
            cardLink.className = "gallery-item group relative rounded-xl overflow-hidden cursor-pointer shadow-lg block";
            const placeholder = document.createElement('div');
            placeholder.className = "w-full h-64 bg-neutral-800";
            const overlay = document.createElement('div');
            overlay.className = "overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100";
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', 'plus');
            icon.className = "w-12 h-12 text-white";
            overlay.appendChild(icon);
            cardLink.appendChild(placeholder);
            cardLink.appendChild(overlay);
            return cardLink;
        };

        const loadMorePhotos = () => {
            if (isLoading || photosLoaded >= totalPhotos) return;
            isLoading = true;
            galleryLoader.classList.remove('hidden');

            setTimeout(() => {
                const fragment = document.createDocumentFragment();
                let newIconsToCreate = [];
                for (let i = 0; i < photosPerBatch; i++) {
                    if (photosLoaded >= totalPhotos) break;
                    const card = createPhotoCard();
                    fragment.appendChild(card);
                    newIconsToCreate.push(card.querySelector('[data-lucide]'));
                    photosLoaded++;
                }
                galleryGrid.appendChild(fragment);
                lucide.createIcons({ nodes: newIconsToCreate });
                galleryLoader.classList.add('hidden');
                isLoading = false;
            }, 1000);
        };

        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300) {
                loadMorePhotos();
            }
        });

        loadMorePhotos(); // Carga Inicial
    }

});