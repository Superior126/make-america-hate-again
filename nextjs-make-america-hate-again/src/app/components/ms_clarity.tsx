"use client"
import Clarity from '@microsoft/clarity'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import styles from './styles.module.css'

export default function MS_Clarity() {
    // Define acceptance from the user with the use of third-party cookies
    const [cookieConsent, setCookieConsent] = useState<boolean>(true)

    // Decide if we should show the cookie banner
    const [showBanner, setShowBanner] = useState<boolean>(false)

    // Keep track if Clarity has been initialized
    const [clarityInit, setClarityInit] = useState<boolean>(false)

    // Update Clarity cookie consent based on useState
    useEffect(() => {
        // Check if Clarity has been initialized before setting consent settings
        if (clarityInit) {
            Clarity.consent(cookieConsent)
        }
    }, [cookieConsent, clarityInit])

    useEffect(() => {
        // Init Clarity
        Clarity.init("qnvhvia1uw")
        setClarityInit(true)
    }, [])

    // Check the users consent settings
    useEffect(() => {
        const userConsentCookie = Cookies.get("user_cookie_consent")

        // If cookie is not present, show cookie banner
        if (!userConsentCookie) {
            setShowBanner(true)
            return
        }

        // Get value of consent cookie
        try {
            const userConsents = JSON.parse(userConsentCookie)
            setCookieConsent(userConsents)
        } catch {
            // If cookie value is null, ask user for cookie consent
            setShowBanner(true)
        }
    }, [])

    // Handle the user consenting/not consenting to cookies
    function handle_user_selection(consent: boolean) {
        setCookieConsent(consent)
        Cookies.set("user_cookie_consent", JSON.stringify(consent), {expires: 10})

        // Close the cookie panel
        setShowBanner(false)
    }

    // Display nothing if "showBanner" is "false"
    if (!showBanner) {
        return null
    }

    // Show cookie banner to ask the user for cookie consent
    return (
        <div className={styles.cookieBanner}>
            <div className={styles.message}>
                <img className={styles.cookieIcon} src='/cookie.svg' alt='cookie icon' />
                <div className={styles.messageText}>
                    <h1>We Use Cookies</h1>
                    <p>We use third-party cookies to provide analytics for our site!</p>
                </div>
            </div>
            <div className={styles.controls}>
                <button onClick={() => handle_user_selection(true)}>Accept All</button>
                <button onClick={() => handle_user_selection(false)}>Reject All</button>
            </div>
        </div>
    )
}