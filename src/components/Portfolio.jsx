import React, { useState, useEffect } from 'react';
import PortfolioItem from './PortfolioItem';
import Modal from './Modal'; // Import the Modal component

// --- (Keep your actualPlayableAdsData and actualHtml5GamesData arrays here as before) ---
const actualPlayableAdsData = [
  {
    "id": "truecaller-playable-ad",
    "title": "Truecaller – Guess the Shadow Caller",
    "description": "A fast-paced playable ad that helps users spot scam callers through silhouette guessing. Built in Phaser 3 with multilingual support and optimized for both portrait and landscape formats across Facebook, Google, Vungle, and Moloco.",
    "thumbnailUrl": "thumbnails/truecaller.png",
    "playableUrl": "https://snktcodes.github.io/playableTruecaller/EN"
  },
  {
    "id": "breakout-playable-ad",
    "title": "Breakout – Classic Arcade Remix",
    "description": "A modern take on the classic breakout game with power-ups and sleek visuals. Built for high replayability and nostalgic appeal.",
    "thumbnailUrl": "thumbnails/breakout.png",
    "playableUrl": "https://snktcodes.github.io/playables/portalOneBreakout/"
  },
  {
    "id": "word-blitz",
    "title": "Word Blitz – Swipe to Spell",
    "description": "A fast-paced word puzzle playable where users swipe letters to form words under pressure. Countdown timers and lively animations keep the tension high.",
    "thumbnailUrl": "thumbnails/wordBlitz.png",
    "playableUrl": "https://snktcodes.github.io/builds/playable_wordBlitz/"
  },
  {
    "id": "puzzle-adventure",
    "title": "DragonVale – Hatch Your Dragon",
    "description": "Tactile tap-to-hatch experience featuring DragonVale's magical dragons. Watch eggs transform into dragons with beautiful animations and satisfying progress visuals.",
    "thumbnailUrl": "thumbnails/dragonVale.png",
    "playableUrl": "https://snktcodes.github.io/dragonPlayableGrow/"
  },
  {
    "id": "hey-cash",
    "title": "HeyCash – Surveys for Rewards",
    "description": "Players answer fun, quick surveys to earn virtual rewards. Built with interactive UI, celebratory animations, and optimized for ad-based lead generation.",
    "thumbnailUrl": "thumbnails/heyCash.png",
    "playableUrl": "https://snktcodes.github.io/builds/playable_HEYCash_/"
  },
  {
    "id": "happn-playable-ad",
    "title": "Happn – Crush & Chat",
    "description": "Interactive dating ad where users swipe to break the ice and match with fun personalities. Simulates a real dating journey with playful UI and fast decision-making.",
    "thumbnailUrl": "thumbnails/happn.png",
    "playableUrl": "https://snktcodes.github.io/happn_EUR_MALE_c"
  },
  {
    "id": "upily-winjokids",
    "title": "UpiLy – WinjoKids",
    "description": "A drag and drop puzzle game.",
    "thumbnailUrl": "thumbnails/upily-winjokids.png",
    "playableUrl": "https://snktcodes.github.io/playables/upily_winjokids/"
  },
  {
    "id": "m3awin",
    "title": "M3Awin – Interactive Trivia",
    "description": "",
    "thumbnailUrl": "thumbnails/m3awin.png",
    "playableUrl": "https://snktcodes.github.io/playable_m3awin/"
  },
  {
    "id": "rival-club",
    "title": "Rival Club – Competitive Trivia",
    "description": "",
    "thumbnailUrl": "thumbnails/rivalClub.png",
    "playableUrl": "https://snktcodes.github.io/builds/playable_RivalClub_v4/"
  },
  {
    "id": "word-spell",
    "title": "WordSpell – Fast-Paced Word Puzzle",
    "description": "A word-based puzzle game.",
    "thumbnailUrl": "thumbnails/wordSpell.png",
    "playableUrl": "https://snktcodes.github.io/builds/playable_wordSpell/"
  },
  {
    "id": "match-the-shapes",
    "title": "Match the Shapes – Colorful Puzzle",
    "description": "A drag and drop puzzle game.",
    "thumbnailUrl": "thumbnails/matchTheShapes.png",
    "playableUrl": "https://snktcodes.github.io/MatchTheShapes_FB_INSTANT_GAME/"
  },
  {
    "id": "magic-mart",
    "title": "Magic Mart – Interactive Shopping",
    "description": "A simulation game where users virtually shop and manage a store.",
    "thumbnailUrl": "thumbnails/shop.png",
    "playableUrl": "https://snktcodes.github.io/magicMartPlayable/"
  },
  {
    "id": "junkyard",
    "title": "Junkyard – Interactive Car Racing",
    "description": "",
    "thumbnailUrl": "thumbnails/junkyard.png",
    "playableUrl": "https://snktcodes.github.io/junkyard_c/"
  },
  {
    "id": "free-cash",
    "title": "Free Cash – Swagbucks Instant Win",
    "description": "",
    "thumbnailUrl": "thumbnails/freeCash.png",
    "playableUrl": "https://snktcodes.github.io/freeCash_c/"
  },
  {
    "id": "merigos-merge",
    "title": "Merigos Merge",
    "description": "",
    "thumbnailUrl": "thumbnails/merigosmerge.png",
    "playableUrl": "https://snktcodes.github.io/playableADMerigosMerge/"
  },
  {
    "id": "modern_command_mayhem_v2",
    "title": "Modern Command Mayhem V2",
    "thumbnailUrl": "",
    "gameUrl": "https://snktcodes.github.io/playables/modern_command_mayhem_v2/"
  }
].map(ad => ({ ...ad, previewUrl: ad.playableUrl, type: 'playable' })); // Add previewUrl and type

// --- Your Actual HTML5 Games Data ---
const actualHtml5GamesData = [
  {
    "id": "hippie-harvest",
    "title": "Hippie Harvest – Fruit Ninja Style",
    "description": "A tropical fruit-slicing game inspired by Fruit Ninja, built in Phaser 3. Set on a sunny beach, players swipe to slice bananas, mangoes, and more with satisfying splash effects and combo scoring.",
    "thumbnailUrl": "thumbnails/hippieharvest.png",
    "gameUrl": "https://hippie-harvest.com"
  },
  {
    "id": "spinwheel",
    "title": "Linen Chest – Spin to Win",
    "description": "Holiday-themed prize wheel game made for kiosks and mobile. Users spin to win discounts, gifts, and cash rewards. Built in Phaser 3 with festive visuals and seamless kiosk compatibility.",
    "thumbnailUrl": "thumbnails/spinwheel.png",
    "gameUrl": "https://spinthewheel.linenchest.com"
  },
  {
    "id": "strategy-empire",
    "title": "Rolo Crush – Match 3 in Space",
    "description": "Space-themed match-3 combat game where players match tiles to defeat enemies across 15 levels. Features power-ups, animations, and responsive gameplay. Built in Phaser 3 for cross-platform play.",
    "thumbnailUrl": "thumbnails/match3.png",
    "gameUrl": "https://snktcodes.github.io/rolacrush/"
  },
  {
    "id": "crypto-bonanza",
    "title": "Bonanza Frenzy – HTML5 Slot Game",
    "description": "Fast-paced slot game with multipliers and big-win animations. Match themed symbols to win up to $20, with auto-spin and manual spin modes offering varied play styles. Built in Phaser 3.",
    "thumbnailUrl": "thumbnails/cryptoBonanza.jpeg",
    "gameUrl": "https://snktcodes.github.io/cryptoBonaza/"
  },
  {
    "id": "speed-pool",
    "title": "Speed Pool – Rapid-Fire Challenge",
    "description": "Race against the clock in this single-player pool game. Pot balls quickly to score combos and multipliers. Features responsive controls, visual guides, and fast-paced gameplay.",
    "thumbnailUrl": "thumbnails/speedPool.jpeg",
    "gameUrl": "https://snktcodes.github.io/speedPoolGame/"
  },
  {
    "id": "next-level",
    "title": "Willy's Edge – Platformer Journey",
    "description": "Join Willy’s Edge Academy in this multi-phase platformer. Train, collect stars, avoid traps, and prove your skills in the office to win. Built with layered progression and character selection.",
    "thumbnailUrl": "thumbnails/willysEdge.png",
    "gameUrl": "https://snktcodes.github.io/wileyedge_nxtlvlfinal_/",
    "displayMode": "landscape"
  }
].map(game => ({ ...game, previewUrl: game.gameUrl, type: 'game', displayMode: game.displayMode || 'any'})); // Add previewUrl and type

function encodeGameUrl(url) {
    // Simple rotation cipher + base64
    const rotated = url.split('').map(char => {
        const code = char.charCodeAt(0);
        // Only rotate printable ASCII
        if (code >= 33 && code <= 126) {
            return String.fromCharCode(33 + ((code - 33 + 47) % 94));
        }
        return char;
    }).join('');
    return btoa(rotated); // Convert to base64
}


function Portfolio() {
  const [activeTab, setActiveTab] = useState('playable-ads');
  const [itemsToDisplay, setItemsToDisplay] = useState(actualPlayableAdsData);

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIframeSrc, setCurrentIframeSrc] = useState('');
  const [currentItemTitle, setCurrentItemTitle] = useState('');
  const [currentItemDisplayMode, setCurrentItemDisplayMode] = useState('any'); // New state


  useEffect(() => {
    if (activeTab === 'playable-ads') {
      setItemsToDisplay(actualPlayableAdsData);
    } else if (activeTab === 'html5-games') {
      setItemsToDisplay(actualHtml5GamesData);
    }
  }, [activeTab]);

const openModalWithItem = (item) => {
    if (!item || !item.previewUrl) {
      console.error("No item or previewUrl provided to openModalWithItem");
      return;
    }
    const encodedUrl = encodeGameUrl(item.previewUrl);
    const proxyUrl = `/proxy.html#${encodedUrl}`; // Path to proxy.html in public folder

    setCurrentIframeSrc(proxyUrl);
    setCurrentItemTitle(item.title);
    setCurrentItemDisplayMode(item.displayMode || 'any'); // Set displayMode
    setIsModalOpen(true);
    console.log('Opening modal for:', item.title, 'via proxy with encoded fragment.');
  };


  const closeModal = () => {
    setIsModalOpen(false);
    // It's good practice to clear the iframe src when closing to stop any ongoing processes/audio
    // Add a small delay to allow the modal fade-out animation (if any) to complete
    setTimeout(() => {
      setCurrentIframeSrc('');
    }, 300); // Match this delay to your CSS transition time for the modal
  };

  return (
    <> {/* Added React Fragment to wrap section and Modal */}
      <section id="portfolio" className="portfolio-section">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'playable-ads' ? 'active' : ''}`}
            onClick={() => setActiveTab('playable-ads')}
          >
            Playable Ads
          </button>
          <button
            className={`tab ${activeTab === 'html5-games' ? 'active' : ''}`}
            onClick={() => setActiveTab('html5-games')}
          >
            HTML5 Games
          </button>
        </div>
        
        <div className={`content ${itemsToDisplay.length > 0 ? 'active' : ''}`}>
          <div className="portfolio-grid" id={activeTab === 'playable-ads' ? 'playableAdsGrid' : 'html5GamesGrid'}>
            {itemsToDisplay.length > 0 ? (
              itemsToDisplay.map(item => (
                <PortfolioItem key={item.id} item={item} onTryNow={openModalWithItem} />
              ))
            ) : (
              <div className="loading-indicator">No projects in this category yet.</div>
            )}
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        iframeSrc={currentIframeSrc}
        title={currentItemTitle}
        displayMode={currentItemDisplayMode}
      />
    </>
  );
}

export default Portfolio;