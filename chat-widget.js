/**
 * HALOCORE Discord Chat Widget
 * Floating Discord button for easy community access
 */

(function() {
    'use strict';

    // Discord invite URL
    const DISCORD_INVITE_URL = 'https://discord.gg/halocore';

    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'discord-chat-widget';
    widget.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: rgba(10, 10, 15, 0.95);
        border: 2px solid #00f0ff;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 9998;
        transition: all 0.3s ease;
        animation: discordPulse 2s ease-in-out infinite;
    `;

    // Add pulse animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes discordPulse {
            0%, 100% {
                box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
            }
            50% {
                box-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3);
            }
        }
        #discord-chat-widget:hover {
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.6), 0 0 50px rgba(0, 240, 255, 0.4);
            background: rgba(15, 15, 25, 0.98);
        }
        #discord-chat-widget:hover .discord-icon {
            filter: drop-shadow(0 0 10px rgba(88, 101, 242, 0.8));
        }
        #discord-tooltip {
            position: fixed;
            bottom: 90px;
            right: 20px;
            background: rgba(10, 10, 15, 0.95);
            border: 1px solid #00f0ff;
            color: #00f0ff;
            padding: 8px 12px;
            border-radius: 4px;
            font-family: 'Orbitron', 'Rajdhani', sans-serif;
            font-size: 12px;
            letter-spacing: 1px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            transform: translateY(10px);
            white-space: nowrap;
            z-index: 9997;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
        }
        #discord-tooltip.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        #discord-tooltip::after {
            content: '';
            position: absolute;
            bottom: -6px;
            right: 20px;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #00f0ff;
        }
    `;
    document.head.appendChild(style);

    // Discord icon (Font Awesome)
    const icon = document.createElement('i');
    icon.className = 'fab fa-discord discord-icon';
    icon.style.cssText = `
        font-size: 28px;
        color: #5865F2;
        transition: all 0.3s ease;
    `;
    widget.appendChild(icon);

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.id = 'discord-tooltip';
    tooltip.textContent = 'Join our Discord';
    document.body.appendChild(tooltip);

    // Show/hide tooltip on hover
    widget.addEventListener('mouseenter', () => {
        tooltip.classList.add('visible');
    });
    widget.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });

    // Click handler - open Discord invite in new tab
    widget.addEventListener('click', () => {
        window.open(DISCORD_INVITE_URL, '_blank', 'noopener,noreferrer');
    });

    // Add widget to page
    document.body.appendChild(widget);

    // Stop pulse animation after 10 seconds to reduce distraction
    setTimeout(() => {
        widget.style.animation = 'none';
    }, 10000);

    // Console log for debugging
    console.log('%c[HALOCORE] Discord widget loaded', 'color: #00f0ff; font-size: 12px;');
})();
