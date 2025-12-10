/**
 * Confluence Documentation Helper
 *
 * This script helps with interactive elements in Confluence-embedded documentation.
 * It provides functionality for tabs, expandable sections, and other interactive elements.
 */

// Wait for page to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all interactive components
  initTabs()
  initExpandableSections()
  initImageZoom()

  // Make external links open in new tab
  setupExternalLinks()
})

/**
 * Initialize tab functionality
 */
function initTabs() {
  const tabs = document.querySelectorAll(".con-tab")

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Get the tab ID from data attribute
      const tabId = this.getAttribute("data-tab")

      // Find parent tab container
      const tabContainer = this.closest(".con-tabs")

      // Remove active class from all tabs and panels in this container
      tabContainer.querySelectorAll(".con-tab").forEach((t) => {
        t.classList.remove("active")
        t.setAttribute("aria-selected", "false")
      })

      tabContainer.querySelectorAll(".con-tab-panel").forEach((p) => {
        p.classList.remove("active")
        p.setAttribute("aria-hidden", "true")
      })

      // Add active class to clicked tab and its panel
      this.classList.add("active")
      this.setAttribute("aria-selected", "true")

      const panel = tabContainer.querySelector(`#${tabId}`)
      if (panel) {
        panel.classList.add("active")
        panel.setAttribute("aria-hidden", "false")
      }
    })
  })
}

/**
 * Initialize expandable sections (accordion functionality)
 */
function initExpandableSections() {
  const expandableHeaders = document.querySelectorAll(".con-expandable-header")

  expandableHeaders.forEach((header) => {
    // Set initial state
    const content = header.nextElementSibling
    content.style.display = "none"
    header.setAttribute("aria-expanded", "false")

    // Add click handler
    header.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      const content = this.nextElementSibling

      // Toggle expanded state
      this.setAttribute("aria-expanded", !isExpanded)

      // Toggle content visibility with animation
      if (isExpanded) {
        content.style.maxHeight = content.scrollHeight + "px"
        setTimeout(() => {
          content.style.maxHeight = "0px"
          setTimeout(() => {
            content.style.display = "none"
          }, 200)
        }, 10)
      } else {
        content.style.display = "block"
        content.style.maxHeight = "0px"
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px"
        }, 10)
      }

      // Rotate chevron icon
      const icon = this.querySelector(".aui-iconfont-chevron-down")
      if (icon) {
        icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)"
        icon.style.transition = "transform 0.2s ease"
      }
    })
  })
}

/**
 * Initialize image zoom functionality
 */
function initImageZoom() {
  const images = document.querySelectorAll(".con-image img")

  images.forEach((img) => {
    img.style.cursor = "pointer"

    img.addEventListener("click", function () {
      // Create modal for image zoom
      const modal = document.createElement("div")
      modal.className = "con-image-modal"
      modal.style.position = "fixed"
      modal.style.top = "0"
      modal.style.left = "0"
      modal.style.width = "100%"
      modal.style.height = "100%"
      modal.style.backgroundColor = "rgba(9, 30, 66, 0.75)"
      modal.style.display = "flex"
      modal.style.alignItems = "center"
      modal.style.justifyContent = "center"
      modal.style.zIndex = "9999"
      modal.style.padding = "20px"

      // Create image element
      const zoomedImg = document.createElement("img")
      zoomedImg.src = this.src
      zoomedImg.style.maxWidth = "90%"
      zoomedImg.style.maxHeight = "90%"
      zoomedImg.style.objectFit = "contain"
      zoomedImg.style.background = "white"
      zoomedImg.style.padding = "10px"
      zoomedImg.style.borderRadius = "5px"
      zoomedImg.style.boxShadow = "0 4px 8px rgba(9, 30, 66, 0.25)"

      // Add close message
      const closeMsg = document.createElement("div")
      closeMsg.textContent = "Click anywhere to close"
      closeMsg.style.position = "absolute"
      closeMsg.style.bottom = "20px"
      closeMsg.style.color = "white"
      closeMsg.style.textAlign = "center"
      closeMsg.style.width = "100%"

      // Add to DOM
      modal.appendChild(zoomedImg)
      modal.appendChild(closeMsg)
      document.body.appendChild(modal)

      // Close on click
      modal.addEventListener("click", () => {
        document.body.removeChild(modal)
      })
    })
  })
}

/**
 * Make external links open in new tab
 */
function setupExternalLinks() {
  const links = document.querySelectorAll(".con-doc a")

  links.forEach((link) => {
    const href = link.getAttribute("href")
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      link.setAttribute("target", "_blank")
      link.setAttribute("rel", "noopener noreferrer")

      // Add external link icon
      if (!link.querySelector(".con-external-icon")) {
        const icon = document.createElement("i")
        icon.className = "aui-icon aui-icon-small aui-iconfont-external-link con-external-icon"
        icon.style.marginLeft = "4px"
        icon.style.fontSize = "12px"
        link.appendChild(icon)
      }
    }
  })
}
