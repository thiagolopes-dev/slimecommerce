# Políticas — papersystem-ui

> Padrões de qualidade, revisão e processo. O agente deve seguir estas políticas em toda implementação.

---

## Política de Implementação

### Antes de codar
- [ ] Entender o requisito completo antes de escrever qualquer linha
- [ ] Verificar se já existe componente/serviço/pipe similar em `shared/` ou no projeto
- [ ] Ler as decisões relevantes no `doc/oraculo.md`
- [ ] Atualizar `doc/kanban.md` movendo a tarefa para "Em Andamento"

### Durante a implementação
- [ ] Seguir os padrões definidos na `doc/constituicao.md`
- [ ] Toda operação HTTP deve ter spinner + tratamento de erro
- [ ] Toda exclusão deve ter um confirmação
- [ ] Tipar os retornos de HTTP — evitar `any` desnecessário
- [ ] Não duplicar lógica — extrair para service ou componente compartilhado se usada em 2+ lugares

### Após implementar
- [ ] Verificar se o código compila sem erros (`npm run dev`)
- [ ] Mover tarefa para "Concluído" no `doc/kanban.md` com data
- [ ] Registrar decisões novas no `doc/oraculo.md`
- [ ] Atualizar `doc/contexto-sessao.md` ao final da sessão

----

*Última revisão: 02/03/2026*
