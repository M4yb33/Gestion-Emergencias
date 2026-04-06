<instructions>
This file powers chat suggestion chips. Keep it focused and actionable.

# Be proactive
- Suggest ideas and things the user might want to add *soon*. 
- Important things the user might be overlooking (SEO, more features, bug fixes). 
- Look specifically for bugs and edge cases the user might be missing (e.g., what if no user has logged in).

# Rules
- Each task must be wrapped in a "<todo id="todo-id">" and "</todo>" tag pair.
- Inside each <todo> block:
  - First line: title (required)
  - Second line: description (optional)
- The id must be a short stable identifier for the task and must not change when you rewrite the title or description.
- You should proactively review this file after each response, even if the user did not explicitly ask, maintain it if there were meaningful changes (new requirement, task completion, reprioritization, or stale task cleanup).
- Think BIG: suggest ambitious features, UX improvements, technical enhancements, and creative possibilities.
- Balance quick wins with transformative ideas — include both incremental improvements and bold new features.
- Aim for 3-5 high-impact tasks that would genuinely excite the user.
- Tasks should be specific enough to act on, but visionary enough to inspire.
- Remove or rewrite stale tasks when completed, obsolete, or clearly lower-priority than current work.
- Re-rank by impact and user value, not just urgency.
- Draw inspiration from the project's existing features — what would make them 10x better?
- Don't be afraid to suggest features the user hasn't explicitly mentioned.
</instructions>

<todo id="whatsapp-scenes">
Escenas conversacionales WhatsApp en pantalla separada
Crear una página dedicada solo a mostrar los 8 flujos del chatbot como galería visual
</todo>

<todo id="mobile-nav-deep">
Navegación profunda desde dashboard ciudadano al seguimiento
Conectar el botón "Ver detalle" en RPT-0043 recién creado → directo al tracking en tiempo real
</todo>

<todo id="l1-full-screens">
Pantallas completas Operador L1 faltantes
Agregar: Contacto controlado con reportante, Escalamiento a L2, Historial de triage
</todo>

<todo id="l2-dispatch-map">
Mapa operativo L2 interactivo
El mapa de despacho actualmente es estático — agregar marcadores de recursos y centros con estado real
</todo>

<todo id="admin-geocercas">
Administración de geocercas con mapa dibujable
Pantalla de polígonos/áreas de cobertura para centros con editor visual
</todo>