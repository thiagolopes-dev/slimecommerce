Gostaria de um painel de gestão para um ecommerce onde vou ter cadastro de produtos, cadastro de usuarios, lista de clientes, Pedidos, e o Ecommerce que iremos gerenciar,

Backend - Nestjs + Prisma + MySQL
Frontend - Nextjs 14 + TailwindCSS + shadcnUI
utilizar  Turbo.json

Vou querer segurança com JWT e Oauth2 com Google.

Senhas com bcrypt (cost factor 12+)
Dados sensíveis criptografados no banco (AES-256)
Logs sem PII (mascarar CPF, cartão, email)

Audit trail para ações críticas (pedidos, pagamentos, admin)

Nunca armazenar dados de cartão (PCI-DSS)

Metodo de pagamento integrado com a Stripe

Validar valores no backend (nunca confiar no frontend)

Rate limiting configurado
 CORS restrito ao domínio da loja
 SQL injection impossível (Prisma parameterized queries)
 XSS protegido (CSP headers + sanitização)
 CSRF protection (SameSite cookies + tokens)


 https://turbo.build/repo/docs
 https://docs.nestjs.com/
 https://nextjs.org/docs
 https://docs.bullmq.io/
 https://ui.shadcn.com/

 acima segue links de documentacoes o qual deve se utilizar e se basear para o desenvolvimento, me entregue códigos de alta qualidade e padrão.

 Vou anexar imagens que desejo exatamente para o meu layout.