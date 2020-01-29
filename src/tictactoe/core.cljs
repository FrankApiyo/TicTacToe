(ns tictactoe.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defn new-board [n]
  (vec (repeat n (vec (repeat n "B")))))

(defonce app-state (atom {:text "Hello world!"
                          :board (new-board 10)}))

(def board-size 10)

(defn computer-move []
  (let [board (:board @app-state)
        remaining-spots (for [i (range board-size)
                              j (range board-size)
                              :when (= (get-in board [j i]) "B")]
                          [i j])
        _ (print remaining-spots)
        move (rand-nth remaining-spots)
        path (into [:board] (reverse move))]
    (print move)
    (print path)
    (swap! app-state assoc-in path "C")))

(defn blank [i j]
[:rect {:width 0.9
        :height 0.9
        :fill "green"
        :x i
        :y j
        :on-click
        (fn react-click [e]
          (prn "You clicked me!")
          (swap! app-state assoc-in [:board j i] "P")
          (computer-move))}])

(defn circle [i j]
  [:circle 
    {:r 0.45
     :fill "gray"
     :cx (+ 0.45 i)
     :cy (+ 0.45 j)}])

(defn cross [i j]
   [:g {:stroke "darkred"
        :stroke-width 0.2
        :stroke-linecap "round"
        :transform
         (str "translate(" (+ 0.5 i) ", " (+ 0.5 j) ") "
              "scale(0.35)")}
    [:line {:x1 -1 :y1 -1 :x2 1 :y2 1}]
    [:line {:x1 1 :y1 -1 :x2 -1 :y2 1}]])


(defn tictactoe []
  [:center
   [:h1 (:text @app-state)]
   [:svg
    {:view-box (str "0 0 " board-size " " board-size)
     :width 500
     :height 500}
    (for [i (range board-size)
          j (range board-size)]
      (case (get-in @app-state [:board j i])
        "B" [blank i j]
        "P" [circle i j]
        "C" [cross i j]))]
   [:p [:button
        {:on-click
         (fn new-game-click [e]
           (swap! app-state assoc :board (new-board 3)))}
        "New Game"]]])

(reagent/render-component [tictactoe]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  ; (swap! app-state assoc-in [:text] "Hi")
  (print (deref app-state))
  )
