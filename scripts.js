document.addEventListener("DOMContentLoaded", function() {
    window.AgentInitializer.init({
        agentRenderURL: "https://agent.jotform.com/0195f94356ba789bac047fd3b1d866a86cf9",
        rootId: "JotformAgent-0195f94356ba789bac047fd3b1d866a86cf9",
        formID: "0195f94356ba789bac047fd3b1d866a86cf9",
        queryParams: ["skipWelcome=1", "maximizable=1"],
        domain: "https://www.jotform.com",
        isDraggable: false,
        background: "linear-gradient(180deg, #ffffff 0%, #e6f1d9 100%)",
        buttonBackgroundColor: "#7ed321",
        buttonIconColor: "#ffffff",
        variant: false,
        customizations: {
            "greeting": "Yes",
            "greetingMessage": "هل انت مشرفة فريق ؟ انا هنا من اجلك",
            "openByDefault": "No",
            "pulse": "Yes",
            "position": "right",
            "autoOpenChatIn": "0"
        },
        isVoice: undefined
    });
});
