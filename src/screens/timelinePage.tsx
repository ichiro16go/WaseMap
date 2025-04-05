"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, RefreshControl } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Post {
  id: string
  username: string
  userAvatar: string
  timestamp: string
  content: string
  image?: string
  likes: number
  comments: number
  isLiked: boolean
  location?: string
}

const TimelinePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      username: "たろう",
      userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
      timestamp: "10分前",
      content: "東京タワーでスタンプゲット！素晴らしい景色でした。",
      image: "https://source.unsplash.com/random/400x300/?tokyo-tower",
      likes: 24,
      comments: 3,
      isLiked: false,
      location: "東京タワー",
    },
    {
      id: "2",
      username: "はなこ",
      userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
      timestamp: "1時間前",
      content: "渋谷でスタンプラリー中！次はどこに行こうかな？",
      likes: 15,
      comments: 5,
      isLiked: true,
      location: "渋谷スクランブル交差点",
    },
    {
      id: "3",
      username: "けんじ",
      userAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
      timestamp: "3時間前",
      content: "浅草寺に来ました！スタンプラリーのポイント3つ目ゲット！",
      image: "https://source.unsplash.com/random/400x300/?asakusa",
      likes: 42,
      comments: 7,
      isLiked: false,
      location: "浅草寺",
    },
    {
      id: "4",
      username: "あきこ",
      userAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
      timestamp: "昨日",
      content: "スタンプラリー始めました！このアプリ便利！",
      likes: 18,
      comments: 2,
      isLiked: false,
    },
  ])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    // Simulate fetching new data
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  const handleLike = (id: string) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked,
            }
          : post,
      ),
    )
  }

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.userAvatar }} style={styles.avatar} />
        <View style={styles.postHeaderText}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>

      <Text style={styles.content}>{item.content}</Text>

      {item.location && (
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={16} color="#666" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      )}

      {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item.id)}>
          <Ionicons
            name={item.isLiked ? "heart" : "heart-outline"}
            size={22}
            color={item.isLiked ? "#FF3B30" : "#666"}
          />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#666" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={22} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  postContainer: {
    backgroundColor: "white",
    marginBottom: 10,
    padding: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postHeaderText: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timestamp: {
    color: "#666",
    fontSize: 12,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  locationText: {
    color: "#666",
    fontSize: 14,
    marginLeft: 4,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: "#666",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
})

export default TimelinePage

